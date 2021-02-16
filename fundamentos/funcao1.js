// funcao sem retorno

function imprimirSoma(a,b){
    console.log(a+b)

}

imprimirSoma(2,10)

//funcao com retorno
function soma(a,b=0){ // é possivel definir um valor fixo 
    return a+b

}
console.log(soma(2))