// par nome / valores

const saudacao = 'opa' // contexto lexico 1 se trata do local que sua variael foi definida neste caso foi definido no arquivo 'parNomeValo

function exec(){
    const saudacao = 'falaaa' // contexto lexico 2  neste caso o contexto se encontra no bloco da função.

    return saudacao
} 

//objetos são grupo aninhados de pares  nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 21,
    peso: 80,
    endereco: {
        logradouro:'Rua dos pombos',    // é possivel coloca um objeto dentro do outro 
        numero:  0
    }

}

console.log(saudacao)
console.log(exec())  // nota-se que dentro da função tem o mesmo nome de variavel , todavia como estão em contexto diferente os resultado não foram os mesmo.
console.log(cliente)

