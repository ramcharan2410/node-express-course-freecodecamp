const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products) // send json data to server
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
