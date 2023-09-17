var http = require('http')
var fs = require('fs')
const path = require('path');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync(path.join(__dirname, 'content', 'big.txt'), 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream(path.join(__dirname, 'content', 'big.txt'), 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) // pipe is pushing from readStream to writeStream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
