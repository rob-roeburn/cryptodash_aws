import cdk = require("@aws-cdk/core");
import dynamodb = require("@aws-cdk/aws-dynamodb");
import iam = require("@aws-cdk/aws-iam");
import ec2 = require("@aws-cdk/aws-ec2");
import ecs = require("@aws-cdk/aws-ecs");


interface DynamoDbStackProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  fargateService: ecs.FargateService;
}

export class DynamoDbStack extends cdk.Stack {
  public readonly cd_coinmarket_table: dynamodb.Table;
  public readonly cd_portfolios_table: dynamodb.Table;

  constructor(scope: cdk.App, id: string, props: DynamoDbStackProps) {
    super(scope, id);

    const dynamoDbEndpoint = props.vpc.addGatewayEndpoint("DynamoDbEndpoint", {
      service: ec2.GatewayVpcEndpointAwsService.DYNAMODB,
      subnets: [{
          subnetType: ec2.SubnetType.PRIVATE
      }]
    });

    const dynamoDbPolicy = new iam.PolicyStatement();
    dynamoDbPolicy.addAnyPrincipal();
    dynamoDbPolicy.addActions("*");
    dynamoDbPolicy.addAllResources();

    dynamoDbEndpoint.addToPolicy(
      dynamoDbPolicy
    );

    this.cd_coinmarket_table = new dynamodb.Table(this, "CoinmarketTable", {
      tableName: "cd_coinmarket",
      partitionKey: {
        name: "tickerId",
        type: dynamodb.AttributeType.STRING
      }
    });
    this.cd_coinmarket_table.addGlobalSecondaryIndex({
      indexName: "TickerSymbolIndex",
      partitionKey: {
        name: 'tickerSymbol',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'tickerId',
        type: dynamodb.AttributeType.STRING
      },
      readCapacity: 5,
      writeCapacity: 5,
      projectionType: dynamodb.ProjectionType.ALL
    });

    this.cd_portfolios_table = new dynamodb.Table(this, "PortfolioTable", {
      tableName: "cd_portfolios",
      partitionKey: {
        name: "portfolioId",
        type: dynamodb.AttributeType.STRING
      }
    });
    this.cd_portfolios_table.addGlobalSecondaryIndex({
      indexName: "UserIdIndex",
      partitionKey: {
        name: 'userId',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'portfolioId',
        type: dynamodb.AttributeType.STRING
      },
      readCapacity: 5,
      writeCapacity: 5,
      projectionType: dynamodb.ProjectionType.ALL
    });

    const fargatePolicy = new iam.PolicyStatement();
    fargatePolicy.addActions(
      //  Allows the ECS tasks to interact with only the cd_coinmarket and cd_portfolio tables in DynamoDB
      "dynamodb:Scan",
      "dynamodb:Query",
      "dynamodb:UpdateItem",
      "dynamodb:GetItem",
      "dynamodb:DescribeTable"
    );
    fargatePolicy.addResources(
      "arn:aws:dynamodb:*:*:table/cd_coinmarket*",
      "arn:aws:dynamodb:*:*:table/cd_portfolios*"
    );
    props.fargateService.taskDefinition.addToTaskRolePolicy(
      fargatePolicy
    );
  }
}
