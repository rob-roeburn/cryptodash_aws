import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')

    updatedPortfolio = dynamodb.update_item(
        TableName='portfolios',
        Key={'portfolioId':{'N': str(event['post'][0]['portfolioId'])}},
        # Empty positions list and set realised PL to 0
        UpdateExpression='set positions = :pd, realisedPL = :rpl',
        ExpressionAttributeValues={
            ':pd':  { 'L' : [] },
            ':rpl': { 'N' : '0' }
        },
        ReturnValues='UPDATED_NEW'
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': updatedPortfolio
    }
