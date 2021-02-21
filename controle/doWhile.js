function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min)  + min
    return Math.floor(valor)
}
let opcao = -1

do{  // executa o bloco de codigo primeiro para depois fazer a comparação
opcao = getInteiroAleatorioEntre(-1,10)
console.log(`Opção escolhida foi ${opcao}`)
}while(opcao!=-1)


