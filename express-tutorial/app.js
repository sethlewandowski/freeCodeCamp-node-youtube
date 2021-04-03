const express = require('express')
const app = express()
const { products } = require('./data.js')

app.get('/', (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
