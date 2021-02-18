console.log(typeof Object) // resultado function
console.log(typeof new Object) // resultado object

const Cliente = function (){} // resultado function

console.log(typeof Cliente) // resultado object
console.log(typeof new Cliente)// resultado function

class Produto{} //ES 2015 ES6
console.log(typeof Produto) //resultado function
console.log(typeof new Produto()) //resultado object