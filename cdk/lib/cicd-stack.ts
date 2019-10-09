import cdk = require("@aws-cdk/core");
import ecr = require("@aws-cdk/aws-ecr");
import ecs = require("@aws-cdk/aws-ecs");
import codecommit = require("@aws-cdk/aws-codecommit");
import codebuild = require("@aws-cdk/aws-codebuild");
import codepipeline = require("@aws-cdk/aws-codepipeline");
import actions = require("@aws-cdk/aws-codepipeline-actions");
import iam = require("@aws-cdk/aws-iam");

interface CiCdStackProps extends cdk.StackProps {
  ecrRepository: ecr.Repository;
  ecsService: ecs.FargateService;
}
export class CiCdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: CiCdStackProps) {
    super(scope, id);

    const backendRepository = new codecommit.Repository(this, "BackendRepository", {
      repositoryName: "Cryptodash-BackendRepository"
    });

    const codebuildProject = new codebuild.PipelineProject(this, "BuildProject", {
      projectName: "CryptodashServiceCodeBuildProject",
      environment: {
        computeType: codebuild.ComputeType.SMALL,
        buildImage: codebuild.LinuxBuildImage.UBUNTU_14_04_PYTHON_3_5_2,
        privileged: true,
        environmentVariables: {
          AWS_ACCOUNT_ID: {
            type: codebuild.BuildEnvironmentVariableType.PLAINTEXT,
            value: cdk.Aws.ACCOUNT_ID
          },
          AWS_DEFAULT_REGION: {
            type: codebuild.BuildEnvironmentVariableType.PLAINTEXT,
            value: cdk.Aws.REGION
          }
        }
      }
    });
    const codeBuildPolicy = new iam.PolicyStatement();
    codeBuildPolicy.addResources(backendRepository.repositoryArn)
    codeBuildPolicy.addActions(
        "codecommit:ListBranches",
        "codecommit:ListRepositories",
        "codecommit:BatchGetRepositories",
        "codecommit:GitPull"
      )
    codebuildProject.addToRolePolicy(
      codeBuildPolicy
    );
    props.ecrRepository.grantPullPush(codebuildProject.grantPrincipal);

    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new actions.CodeCommitSourceAction({
      actionName: "CodeCommit-Source",
      branch: "master",
      trigger: actions.CodeCommitTrigger.POLL,
      repository: backendRepository,
      output: sourceOutput
    });
    const buildOutput = new codepipeline.Artifact();
    const buildAction = new actions.CodeBuildAction({
      actionName: "Build",
      input: sourceOutput,
      outputs: [
        buildOutput
      ],
      project: codebuildProject
    });
    const deployAction = new actions.EcsDeployAction({
      actionName: "DeployAction",
      service: props.ecsService,
      input: buildOutput
    });

    const pipeline = new codepipeline.Pipeline(this, "Pipeline", {
      pipelineName: "CryptodashPipeline"
    });
    pipeline.addStage({
      stageName: "Source",
      actions: [sourceAction]
    });
    pipeline.addStage({
      stageName: "Build",
      actions: [buildAction]
    });
    pipeline.addStage({
      stageName: "Deploy",
      actions: [deployAction]
    });

    new cdk.CfnOutput(this, 'BackendRepositoryCloneUrlHttp', {
      description: 'Backend Repository CloneUrl HTTP',
      value: backendRepository.repositoryCloneUrlHttp
    });

    new cdk.CfnOutput(this, 'BackendRepositoryCloneUrlSsh', {
      description: 'Backend Repository CloneUrl SSH',
      value: backendRepository.repositoryCloneUrlSsh
    });
  }
}
