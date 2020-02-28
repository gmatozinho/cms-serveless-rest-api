'use strict';

const { get } = require("./get-user")
require('dotenv-safe').config();
var jwt = require('jsonwebtoken');

/* @params - username,password */
module.exports.login = async event => {
  const data = JSON.parse(event.body);
  const res = await get(data.username);

  if (res && res.statusCode === 200 && data.password === res.body.password) {
    //add id and access group in jwt
    var token = jwt.sign({ id: res.body.id, access_group: res.body.access_group }, process.env.SECRET, {
      algorithm: 'HS256',
      expiresIn: 3000 // expires in 5min
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ auth: true, token }),
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify(
      {
        auth: "false",
        message: 'Login inválido!',
      }
    ),
  };

};
