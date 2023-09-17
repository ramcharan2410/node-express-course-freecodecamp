// for built-in modules like os, fs, path, etc, we don't need to install them, because they are already built-in in NodeJS
const os = require('os')

// info about current user
const user = os.userInfo() // os.userInfo() returns an object
console.log(typeof user, user)

// os.uptime() method returns the system uptime in seconds (how long our system has been running)
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
