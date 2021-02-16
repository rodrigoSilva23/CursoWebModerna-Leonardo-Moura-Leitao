const valores = [8.1,9.1,5.25,0] // é uma estrutura dinamica  

console.log(valores[0],valores[3]) // é possivel acessar os arrays atraves do indice que começa sempre do 0

valores[4]= 10 // acabei de adicionar um valor na arrays de indice 4

console.log(valores)
console.log(valores.length) //verifica quantos indice tem no array
valores.push({id:3},false,null,'teste') // o push adiciona valores. vale lembra que os arrays aceita qual quer tipo de dados
 console.log(valores)
 console.log(valores.pop()) // remove o ultimo indice da array
 delete valores[0] // deleta o indice desejado
 console.log(valores)

 console.log(typeof valores)
