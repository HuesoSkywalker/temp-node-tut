//CommonJs, every file is amodule (by defaul)
//Modules = Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi(names.john)
sayHi(names.peter)

