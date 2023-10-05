const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    // we are not sending everything about a product, we are only sending the important info about that product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // /:productID === a route parameter (provided by expressJS)

  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params
  // the result of req.params is a string

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

// route parameters can get way more complex as this
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

// https://hn.algolia.com/api

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  // using req.query => we have access to all the queries from a url as an object
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    // limit the number of products to be appeared to the user
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search'); (You can also do this, but most common way is done below)
    // Observe that we are not setting status code 404. (Because this is a successful response)
    return res.status(200).json({ sucess: true, data: [] })
    // we are using return because, if not used, nodeJS also continues to read below res.json() and it sends TWO RESPONSES which need to be avoided
  }
  // if no queries are provided / wrong query name's are provided(example: limi for limit (or) serch for search, etc) => sortedProducts === products (All products will appear)
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
