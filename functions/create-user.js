'use strict';

const dynamodb_client = require('../db/dynamoClient');


/* @params - username,password,access_group */
module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      id: data.username,
      password: data.password,
      access_group: data.access_group,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the user to the database
  dynamodb_client.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the user item.',
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