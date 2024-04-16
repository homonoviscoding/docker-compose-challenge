const fs = require('fs/promises')
const client = require("../../db");

global.beforeEach(async() => {
  const sqlDataForBooks = await fs.readFile('./sql/create-books.sql')
  const sqlStringForBooks = sqlDataForBooks.toString()

  await client.query(sqlStringForBooks)
})
