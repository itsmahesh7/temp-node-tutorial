
//Modules
const sayHi=require('./3-utils');
const names=require('./2-names');
const add=require("./4-add")
console.log(names);

sayHi('Mahesh');
sayHi(names.john);
sayHi(names.peter);

console.log(`The addition is ${add(3,6)}`);