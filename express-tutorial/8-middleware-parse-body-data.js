const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
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

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})

// notes
// in the front end form action=
// if the front end is hosted with the backend on the same server, it can be as simple as action="/login"
// otherwise it has to be full path like action="102.55.251.235/login"
