// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)

// This will create an infinite loop
// setInterval(() => {
//   console.log('hello world');
// })
setInterval(() => {
  console.log('hello world')
}, 1000)
// setTimeout() is also present in NodeJS