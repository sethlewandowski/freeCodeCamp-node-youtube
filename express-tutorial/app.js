const express = require('express')
const app = express()
const { products } = require('./data.js')

app.get('/', (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params

  const singleProduct = products.find((product) => product.id === Number(id))
  if (!singleProduct) {
    res.status(404).send('Product does not exist!')
  } else {
    res.json(singleProduct)
  }
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  sortedProducts.length === 0
    ? //res.status(200).send('no products matched your criteria.')
      res.status(200).json({ success: true, data: [] })
    : res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
