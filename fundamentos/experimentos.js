let a = 30
global.b =1234


this.c=456
this.d=false
this.e='teste'

// deve-se evitar cria varias no escopo global
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca sem var e let!!!

//abc=3 // jamais faça isso em casa e em lugar nenhum..

console.log(global.abc)

