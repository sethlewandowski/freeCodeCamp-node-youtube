const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page')
  } else if (req.url === '/about') {
    res.end('About page')
  } else {
    res.end('Oops!')
  }
})

server.listen(5000, () => {
  console.log('Server listening on port 5000')
})
