import json
import boto3
from datetime import datetime
import uuid

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    portfolioData = dynamodb.get_item(TableName='portfolios', Key={'portfolioId':{'N': str(event['post'][0]['portfolioId'])}})
    portfolioData['Item']['positions']['L'].append({
        'M': {
            '_id': {'S': str(uuid.uuid1())},
            'DateTime': {'N': str((((datetime.strptime(event['post'][1]['tradeDate'], '%Y-%m-%dT%H:%M:%S.%fZ')) - datetime(1970, 1, 1)).total_seconds()*1000))},
            'positionQty': {'S': event['post'][2]['positionQty']},
            'currencyId': {'S': str(event['post'][3]['tickerId'])},
            'name': {'S': event['post'][4]['tickerName']},
            'symbol': {'S': event['post'][5]['tickerSymbol']},
            'priceAtTrade': {'S': event['post'][6]['tickerPrice']},
            'PL': {'N': str(0)},
            'active': {'BOOL': True}
        }
    })
    updatedPortfolio = dynamodb.update_item(
        TableName='portfolios',
        Key={'portfolioId':{'N': str(event['post'][0]['portfolioId'])}},
        UpdateExpression='set positions = :pd',
        ExpressionAttributeValues={
            ':pd': portfolioData['Item']['positions']
        },
        ReturnValues='UPDATED_NEW'
    )
    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': updatedPortfolio
    }
