const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// parse incomming form data
app.use(express.urlencoded({ extended: false }))

app.use('/api/people', people)
app.use('/api/auth', auth)
// parse incomming json data
app.use(express.json())

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
