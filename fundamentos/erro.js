function tratarErroELancar(erro){
    throw new Error("Ocorreu um erro processamento")
  //  throw 10 //é possivel colocar qual quer coisa para tratar o erro
    //throw 'mensagem'
    //thow true
    //throw {nome: erro.name}

}

function imprimirNomeGritado(obj) {

    try{ // usa-se o try para verificar se o codigo esta com erro..

        console.log(obj.name.toUpperCase() + '!!!')

    }catch(e){ // o catch é uma funçao que trata o erro
        tratarErroELancar(e)

    }finally{ // trata-se de um bloco que será executad tanto se houve o erro como nao

        console.log("Ola!")

    }

}

const obj = {nome:'Rodrigo'}
imprimirNomeGritado(obj)