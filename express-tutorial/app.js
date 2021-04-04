const express = require('express')
const app = express()
const logger = require('./logger')

// all requests through logger middleware
// order matters, this must be before routes you want to apply to
app.use(logger)

app.get('/', (req, res) => {
  res.send('home')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
