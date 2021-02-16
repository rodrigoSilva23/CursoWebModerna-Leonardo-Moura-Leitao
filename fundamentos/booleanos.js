let isAtivo = false;

console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1

console.log(!isAtivo) // colocando a exclamação para verificar se um valor é diferente. na qual retorna um resultado boolean
console.log(!!isAtivo) // tambem é possivel usar duas !! para verifica se o vamos é o mesmo  ou seja se 1 continua cendo 1 

// exemplos

console.log('os verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!!" ") // tem um espaço
console.log(!!"text")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log("os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar ')
console.log(!!('' || null || 0 || ' '))

// Importante sabe que da para fazer uma operção logica em cima de variavel no js

let NOME = ''

console.log(NOME || 'NOme Obrigatorio') // ele faz uma verficação caso a variavel nome estava vazia ele coloca "nome obrigatorio" se tiver com valor ele coloca oque tiver...