// extraindo um atributo de um array
 
//  destructuring   |   arrey 
const   [a]    =        [10] // cuidado a ser tomado ja que o destructuring usa a mesma chave que os [], neste caso o '[a]' é o destructuring

console.log(a)

//esse exemplo atribui os elemento de uma arry em uma variavel atraves do destructuring
//         variveis         arrey
const [n1,,n3,,n5,n6=0] = [10,7,9,8]

//exibição usa indence como base para a atribuição
console.log(n1,n3,n5,n6)