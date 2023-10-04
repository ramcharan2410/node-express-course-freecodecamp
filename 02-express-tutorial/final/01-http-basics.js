const http = require('http')

// we are sending responses for user requests
// res.end() MUST be called for each response
const server = http.createServer((req, res) => {
  // console.log(req.method)
  // console.log(req.url)
  const url = req.url
  // home page
  if (url === '/') {
    // we are providing metadata in res.writeHead()
    res.writeHead(200, { 'content-type': 'text/html' })
    //res.writeHead(200, { 'content-type': 'text/plain' }) this will consider text as plain, that means below will not be treated as html
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types