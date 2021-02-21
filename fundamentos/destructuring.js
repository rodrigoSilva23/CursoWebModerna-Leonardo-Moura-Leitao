// recurso do ES2015

const pessoa = {
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'Rua dos bobos',
        numero:0
    }

}

const {nome,idade} = pessoa // os chaves neste caso não representa um objeto e sim o destructuring

console.log(nome,idade)

const {nome: nomePessoa, idade: idadePessoa} = pessoa  // neste caso eu posso cria variaveis para extrair os dados nome e idade

console.log(nomePessoa,idadePessoa)

const{sobrenome =null, bemHumorado ='mentira'} =pessoa //  sobrenome e bemHumorado não se encontra no objeto todavia eles podem ser exibidos


console.log(sobrenome ,bemHumorado) // resultado é que sobrenome da undefine e  bemHumorado esta definido como uma string camada 'mentira'
                                    // o certo é coloca null como padrao para dizer que o atributo existe e não aponta para nenhum lugar na memoria

const {endereco:{logradouro,numero,cep =null}} = pessoa // esse codigo extrair os dado de dentro de endereco nota-se que é necessario cria um outro destructuring

console.log(logradouro,numero)

