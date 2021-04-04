const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse incomming form data
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  console.log(req)

  const { name } = req.body
  if (name) {
    return res.status(200).send(`welcome ${name}`)
  } else {
    return res.status(401).send('please provide a name!')
  }
})

// parse incomming json data
app.use(express.json())

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name' })
  }
  res.status(201).send({ success: true, person: name })
})

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
