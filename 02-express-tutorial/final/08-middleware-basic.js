const express = require('express')
const app = express()

//  req => middleware => res
// middlewares are everywhere in express (It is the heart and soul of express)

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
  // when you have a middleware, either you TERMINATE (send back your own response), or you PASS it on to the next middleware (using next())
}

// middleware (logger) is in between route and callback function
// express supplies (req,res, next) as parameters to logger internally
app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
