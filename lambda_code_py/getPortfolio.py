import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    portfolioData = dynamodb.get_item(TableName='portfolios', Key={'portfolioId':{'N': event['pathParameters']['portfolioId']}})
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': json.dumps(portfolioData)
    }
