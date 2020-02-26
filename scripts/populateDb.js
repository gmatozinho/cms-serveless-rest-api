var { client } = require("../db/client");
var { init } = require("../db/queries");

module.exports.populate = async event => {
    try {

        client.connect()
        await init(client)
        client.end()


    } catch (err) {
        console.log(err)
    }
}
