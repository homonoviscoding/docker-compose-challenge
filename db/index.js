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
    try {
      // Execute the query
      const result = await dbClient.query(str, values);
      return result;
    } finally {
      // Ensure connection is closed
      await dbClient.end();
    }
  }
}

module.exports = client;
