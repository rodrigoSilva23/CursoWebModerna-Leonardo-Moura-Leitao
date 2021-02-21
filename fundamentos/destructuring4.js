

//        destructuring como parametro
function rand ([min = 0, max=10] ){

    if (min >max) [min,max] = [max,min]
    const valor = Math.random() * (max - min)  + min
    return Math.floor(valor)
}

console.log(rand([50,10]))

console.log(rand([60]))

console.log(rand([,30]))


console.log(rand([]))

