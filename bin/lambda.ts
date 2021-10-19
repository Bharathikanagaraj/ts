#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaStack } from '../lib/lambda-stack';
import { ApiStack } from '../lib/api-stack';
import { CloudfrontStack } from '../lib/cloudfront-stack';


const app = new cdk.App();
//new LambdaStack(app, 'LambdaStack', {});
new ApiStack(app, 'ApiStack', {})
//new CloudfrontStack(app, 'CloudfrontStack', {})