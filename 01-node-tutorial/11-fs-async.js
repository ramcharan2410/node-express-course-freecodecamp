// asynchronously - blocking
// as it is asynchronous, we need to provide a callback function
// but eventually we will make it into a callback hell

const path = require('path');
const { readFile, writeFile } = require('fs');

console.log('start');
readFile(path.join(__dirname, 'content', 'first.txt'), 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(path.join(__dirname, 'content', 'second.txt'), 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      path.join(__dirname, 'content', 'result-async.txt'),
      `Here is the result: ${first}, ${second}\n`, { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      },
    )
  })
})
console.log('starting next task');
