const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// all requests through logger middleware
// order matters, this must be before routes you want to apply to
//app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('home')
})

app.get('/about', [logger, authorize], (req, res) => {
  console.log(req.user)
  res.send('about')
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
