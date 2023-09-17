const path = require('path');
const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
  writeFileSync(path.join(__dirname, 'content', 'big.txt'), `hello world ${i}\n`, { flag: 'a' })
}