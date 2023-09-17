// console.log('Welcome to Node Tutorial')
var http = require('http');
var fs = require('fs');
const path = require('path');
http.createServer(function (req, res) {
    const fileStream = fs.createReadStream(path.join(__dirname, 'content', 'big.txt'), 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000);