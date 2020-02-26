const Client = require('serverless-mysql');
var client = Client({
    config: {
        host: process.env.AURORA_HOST,
        database: process.env.DB_NAME,
        port: process.env.AURORA_PORT,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})



module.exports = {
    client
}