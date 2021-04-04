const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log(req)

  const { name } = req.body
  if (name) {
    return res.status(200).send(`welcome ${name}`)
  } else {
    return res.status(401).send('please provide a name!')
  }
})

module.exports = router
