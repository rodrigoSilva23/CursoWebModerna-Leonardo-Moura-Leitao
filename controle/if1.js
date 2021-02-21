function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Parabéns você esta Aprovado com a Nota:',nota)

    }
}

soBoaNoticia(8.5)
soBoaNoticia(5) // nota-se que só é exibido no console o valor >=7

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('pe verdade... '+valor)
        

    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2,1])
seForVerdadeEuFalo({})
