console.log(Math.ceil(6.2))

const obj1={}

obj1.nome = 'bola'
//obj1['nome'] = 'bola2' // o ideal é usar anotação ponto.

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function (){
        console.log('exec..')
    }

}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
test = new Obj().exec()