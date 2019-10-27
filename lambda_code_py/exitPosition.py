import json
import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    portfolioData = dynamodb.get_item(TableName=str(event['post'][1]['table']), Key={'portfolioId':{'N': str(event['post'][0]['portfolioId'])}})

    for index,currentPosition in enumerate(portfolioData['Item']['positions']['L']):
        # Match the POSTed ID against the position element
        if str(currentPosition['M']['_id']['S']) == str(event['post'][2]['positionId']):
            # Set the position active status to false (exit position)
            currentPosition['M']['active']['BOOL']=False
            portfolioData['Item']['positions']['L'][index]=currentPosition

    updatedPortfolio = dynamodb.update_item(
        TableName=str(event['post'][1]['table']),
        Key={'portfolioId':{'N': str(event['post'][0]['portfolioId'])}},
        UpdateExpression='set positions = :pd, realisedPL = :rpl',
        ExpressionAttributeValues={
            ':pd': portfolioData['Item']['positions'],
            ':rpl': {'N':str(event['post'][3]['realisedPL']+float(portfolioData['Item']['realisedPL']['N']))}
        },
        ReturnValues='UPDATED_NEW'
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*' },
        'body': updatedPortfolio
    }
