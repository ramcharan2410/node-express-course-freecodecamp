const path = require('path')

console.log(path.sep) // returns platform specific separator

const filePath = path.join('/content/', 'subfolder', 'test.txt') // in Windows => you have to use '\' as path separator (Even though you don't change the separator to '\' for Windows, it will convert into '\' and display?) 
console.log(filePath)

const base = path.basename(filePath) // returns the last portion of the path
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') // path.resolve() returns an absolute path

console.log(absolute)
// const absolute = path.resolve('content', 'subfolder', 'test.txt'); This joins your parameters to the absolute path to the directory you are currently in.
