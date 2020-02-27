'use strict';

const dynamodb_client = require('../db/dynamoClient');

module.exports.getUser = async (username) => {
    const params = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        Key: {
            id: username,
        },
    };
    // fetch user from the database
    const result = await dynamodb_client.get(params).promise();
    
    if (!result || !result.Item) {
        return {
            statusCode: 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t fetch the user item.',
        };
    }

    return response = {
        statusCode: 200,
        body: result.Item,
    };

};