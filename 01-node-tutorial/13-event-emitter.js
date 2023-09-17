// npm - global command, comes with node
// npm --version

// local dependency -  for to use a package only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

/*********/

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) (later you can go to package.json and change them as per your wish)
// if you want to publish this package, MAKE SURE PACKAGE NAME IS UNIQUE
// in node_modules folder (npm creates it), IT STORES ALL THE DEPENDENCIES

/*********/

// get back the class(EventEmitter)
// if want custom => extend from class
// otherwise just for emitting and handling events create instance as we did below
const EventEmitter = require('events')
// All Objects that emit events are extended from the EventEmitter class
const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// response is an event (can have multiple event emitter for just one type of event like below)
// There is also customEmitter.off(), customEmitter.addListener(), customEmitter.removeListener(), customEmitter.removeAllListeners(), etc
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34) // emit only after listening (on)

// const _ = require('lodash');
// const items=[1,[2,[3,[4]]]];
// const newItems= _.flattenDeep(items);
// console.log(newItems); // [1,2,3,4]

// npm i nodemon -D (installs as a dev dependency)
// npm i nodemon --save-dev (also installs as a dev dependency) (--save-dev === -D)
