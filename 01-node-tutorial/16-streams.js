const { createReadStream } = require('fs')
const path = require('path');
// default 64kb (It reads max upto this much size at a time (In chunks))
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream(path.join(__dirname, 'content', 'big.txt'), { highWaterMark: 90000 })
// const stream = createReadStream(path.join(__dirname, 'content', 'big.txt'), { encoding: 'utf8' })
// const stream = createReadStream(path.join(__dirname, 'content', 'big.txt'), { highWaterMark: 90000 },{ encoding: 'utf8' })
const stream = createReadStream(path.join(__dirname, 'content', 'big.txt'));

stream.on('data', (result) => {
  console.log(result); // we are reading data as chunks by default (Refer to Node Documentation)

  // console.log(result.toString()); will give only last chunk original data?
})
stream.on('error', (err) => console.log(err));
