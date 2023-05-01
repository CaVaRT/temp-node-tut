//Modules
//node uses CommonJS, every file is a module

const { jason, peter } = require('./firstModule');

const sayHi = require('./secondModule');

const data = require('./alternative-flavour');

require('./mind-grenade');

sayHi('suzanna');
sayHi(peter);
sayHi(jason);
