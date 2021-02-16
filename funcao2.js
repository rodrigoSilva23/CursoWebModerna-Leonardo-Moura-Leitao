// Armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(10,20)

//Armazenando uma funcao arrow em uma variavel

const soma = (a,b) =>{
    return a+b

}

console.log(soma(50,1))


//retorno implícito arrows

const subtracao = (a,b) => a-b // redução da funçao arrow com uma unica linha 

console.log(subtracao(10,5))

const imprimir2 = a => console.log(a)  //é possivel reduzir ainda mais, caso tenha um unico parametro