console.log('a =',a) // o resultado undefined acontece pq a variavel a recebeu um ensamento(hoisting) que é mover a declaração para o top do codigo ,
var a =2

console.log('a =',a)


console.log('b =',b ) // ja usando a declaração let não funciona.

let b = 'erro!'