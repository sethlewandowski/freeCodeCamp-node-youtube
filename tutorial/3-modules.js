// CommonJS - every file is a module (by default)
// node uses common js under the hood.
// Modules - Encapsulated Code (only share minimum)
// when you import a module, you envoke it
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
