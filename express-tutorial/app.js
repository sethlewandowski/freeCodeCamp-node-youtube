const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
