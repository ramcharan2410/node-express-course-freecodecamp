// this is a better solution to the previous section

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use('/api',logger) (apply logger function to only filtered/specific routes)

// POSITION OF app.use() IN THE CODE MATTERS => always put app.use() at the top of the document, only then it will be applied to all routes 
// app.use() is expecting a middleware
app.use([logger, authorize])
// api/home/about/products (Even for this, above middleware gets applied) (Because we did not apply any filtering to the routes)

// app.use([authorize, logger]) (authorize happens first, then logger => ORDER MATTERS in app.use())
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
