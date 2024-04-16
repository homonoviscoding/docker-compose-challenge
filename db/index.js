// Load our .env file
require('dotenv').config()
// Require Client obj from the postgres node module
const { Client } = require("pg");

const client = {
  query: async (str, values) => {
    const dbClient = new Client({
      host: process.env.HOST,
      port: process.env.PORT,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD
    })
    // connect a connection
    await dbClient.connect()
    // execute the query
    const result = await dbClient.query(str, values)
    // close the connection
    await dbClient.end()
    return result
  }
}

module.exports = client;
