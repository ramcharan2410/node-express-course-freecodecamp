// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade') // this method can also be done with ES6 modules (When an exported function (in this case => addValues()) is invoked in that module itself)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data.items);
console.log(data.singlePerson);