// synchronously - non-blocking
const path = require('path');
const { readFileSync, writeFileSync } = require('fs')
console.log('start')

// to readFileSync provide - path and encoding
const first = readFileSync(path.join(__dirname, 'content', 'first.txt'), 'utf8');
const second = readFileSync(path.join(__dirname, 'content', 'second.txt'), 'utf8');

// to writeFileSync provide - path and content. (If file not present, then it will create a new file; If file exist=> ALL CONTENT PREVIOUSLY PRESENT WILL BE OVERWRITTEN IF NO FLAGS LIKE {flag:'a'} IS PRESENT)
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}\n`,
  { flag: 'a' } // flag: 'a' means append
)
console.log('done with this task')
console.log('starting the next one')
