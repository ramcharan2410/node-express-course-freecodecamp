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
// express supplies (req,res,next) as parameters to logger internally
app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// Middleware is a fundamental concept in web development, particularly when working with web frameworks like Express.js (Node.js), Django (Python), Ruby on Rails (Ruby), and many others. Middleware is a piece of software that sits between the client (usually a web browser) and the server, processing and transforming data as it passes through. It plays a crucial role in handling HTTP requests and responses in web applications.

// Here are some key characteristics and functions of middleware:

// 1. **Interception and Processing**: Middleware intercepts HTTP requests and responses before they reach the final destination (e.g., a route handler or a controller in a web application). It can inspect and modify both the request and response data.

// 2. **Chain of Functions**: Middleware functions are often organized in a sequence or chain. Each middleware function in the chain can perform a specific task, such as logging, authentication, authorization, validation, compression, and more. These functions are executed in a specific order.

// 3. **Access to Request and Response Objects**: Middleware functions typically have access to the request (`req`) and response (`res`) objects. They can read data from the request, modify it, or set data in the response.

// 4. **Control Flow**: Middleware can decide whether to pass control to the next middleware function in the chain or to end the request-response cycle. This allows for conditionally executing certain actions based on the request or response data.

// 5. **Reusable and Modular**: Middleware can be designed to be reusable across different routes or parts of an application. This promotes modular and maintainable code.

// 6. **Error Handling**: Middleware can also handle errors and exceptions that occur during the request-response cycle. It can pass errors to a dedicated error-handling middleware or take appropriate actions.

// Common use cases for middleware in web development include:

// - **Logging**: Logging middleware can record information about incoming requests, outgoing responses, and other relevant data for debugging and monitoring purposes.

// - **Authentication and Authorization**: Middleware can verify the identity of users (authentication) and determine whether they have the necessary permissions to access certain resources (authorization).

// - **Parsing Request Data**: Middleware can parse incoming request data, such as form submissions or JSON payloads, into a usable format.

// - **Compression**: Middleware can compress responses to reduce bandwidth usage and improve performance, commonly used for sending gzipped or compressed files.

// - **Caching**: Middleware can implement caching strategies to serve cached responses for repeated requests, reducing server load and improving response times.

// - **Validation**: Middleware can validate incoming data, ensuring it meets certain criteria or constraints.

// - **Routing**: Routing middleware can determine which route or controller should handle a specific request based on the URL.

// - **Error Handling**: Middleware can catch and handle errors, providing custom error responses or logging error details.

// Overall, middleware is a versatile tool in web development that allows developers to add functionality to an application's request-response pipeline in a modular and reusable way, enhancing the application's capabilities and maintainability.
