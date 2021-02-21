function teste1(num){
    if(num>7)
        console.log(num) // neste caso a execução do if só se aplica a primeira sentença do codigo
    console.log('Final')
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num>7);{  // muito cuidado com o ; , não usar com as estruturas de controle 
        console.log(num)
    }
}


teste2(6)
teste(8)

