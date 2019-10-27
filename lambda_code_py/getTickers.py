import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    tickers = dynamodb.scan(TableName='cmcCache', ProjectionExpression='tickerId, tickerName, tickerSymbol')
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': json.dumps(tickers)
    }
