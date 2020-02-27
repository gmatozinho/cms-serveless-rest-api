'use strict';

const dynamodb_client = require('../db/dynamoClient');

/* @params - id,value */
module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_ACCESS_GROUP_TABLE,
    Item: {
      id: data.id,
      value: data.value,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the access-group to the database
  dynamodb_client.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the access group item.',
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};