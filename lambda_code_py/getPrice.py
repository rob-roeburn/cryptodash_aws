import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    priceData = dynamodb.get_item(TableName='cmcCache', Key={'tickerId':{'N': event['pathParameters']['tickerId']}})
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': json.dumps(priceData)
    }
