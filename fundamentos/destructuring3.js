

//        destructuring como parametro
function rand ({min = 0, max=10} ){
    const valor = Math.random() * (max - min)  + min
    return Math.floor(valor)
}
const obj= {min:40,max:50}
console.log(rand(obj))

console.log(rand({min:90,max:100}))

console.log(rand({}))