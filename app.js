const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('My app v1')
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`listening on port ${port} : hedha log `)
})