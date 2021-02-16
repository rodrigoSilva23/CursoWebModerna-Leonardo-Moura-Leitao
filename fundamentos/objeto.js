const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco= 4998.80
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço , mais ainda funciona 

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,       // o objeto é froma por chave e valor exemplo  chave:valor = nome:'rodrigo' ||  boolean:false
    obj:{
        blabla:1,      // é possivel cria varios objetos dentro do mesmo, e tambem é possivel repetir os nome
        obj:{
            blabla:2
        }
    }
}