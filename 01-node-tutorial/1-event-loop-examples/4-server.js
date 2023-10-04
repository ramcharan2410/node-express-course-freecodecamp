const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  // Why is it logging twice when requested/reloaded(or accessed) the page only once?
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})

// If you are seeing the "request event" log message being printed twice in your console, it's likely because modern web browsers often make multiple requests when you access a web page, and each request will trigger the server's request event handler.

// Here's what typically happens:

// 1. When you access a web page in your browser, it often initiates multiple HTTP requests behind the scenes. For example, in addition to the main HTML request, there may be additional requests for CSS files, JavaScript files, images, and other resources referenced by the HTML page.

// 2. Each of these HTTP requests will trigger the request event handler in your Node.js server. Therefore, if your browser makes several requests to load all the necessary resources for a web page, you will see "request event" logged for each of these requests.

// To illustrate, let's say your web page includes an HTML file, a CSS file, and a JavaScript file. When you access the page, your browser will typically make at least three requests to the server:

// - One for the HTML file.
// - One for the CSS file.
// - One for the JavaScript file.

// Each of these requests will trigger the request event handler in your Node.js server, resulting in "request event" being logged three times.

// If you want to see this behavior more clearly, you can open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect") and go to the "Network" tab. You'll be able to see all the individual HTTP requests being made by your browser when you access a web page.

// If you only want to log the "request event" once per incoming request, you can add more specific logging or filtering based on the request URL or other criteria in your server code.