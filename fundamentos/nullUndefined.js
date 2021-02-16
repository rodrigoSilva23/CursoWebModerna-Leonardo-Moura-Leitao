let valor // não inicializada = undefined

console.log(valor) // como a variavel não foi inicializada então o resulta da undefined

valor = null // a viriavel não esta apontada nenhum local de memoria 

console.log(valor) 
//console.log(valor.toString())  //Erro! ja que valor é não aponta a nenhum bloco de memoria 
const produto ={}
console.log(produto.preco) // resultado é undefined  ja que preço não esta definido

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, sempre usa o null .

produto.preco= null // sem preço(vazio)
console.log(produto)
