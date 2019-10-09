#!/usr/bin/env node

import cdk = require("@aws-cdk/core");
import 'source-map-support/register';
import { WebApplicationStack } from "../lib/web-application-stack";
import { NetworkStack } from "../lib/network-stack";
import { EcrStack } from "../lib/ecr-stack";
import { EcsStack } from "../lib/ecs-stack";
import { CiCdStack } from "../lib/cicd-stack";
import { DynamoDbStack } from '../lib/dynamodb-stack';
import { APIGatewayStack } from "../lib/apigateway-stack";

const app = new cdk.App();
new WebApplicationStack(app, "Cryptodash-Website");
const networkStack = new NetworkStack(app, "Cryptodash-Network");
const ecrStack = new EcrStack(app, "Cryptodash-ECR");
const ecsStack = new EcsStack(app, "Cryptodash-ECS", {
    vpc: networkStack.vpc,
    ecrRepository: ecrStack.ecrRepository
});
new CiCdStack(app, "Cryptodash-CICD", {
    ecrRepository: ecrStack.ecrRepository,
    ecsService: ecsStack.ecsService.service
});
const dynamoDbStack = new DynamoDbStack(app, "Cryptodash-DynamoDB", {
    vpc: networkStack.vpc,
    fargateService: ecsStack.ecsService.service
});
new APIGatewayStack(app, "Cryptodash-APIGateway", {
  fargateService: ecsStack.ecsService
});
app.synth();
