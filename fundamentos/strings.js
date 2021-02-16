const escola = 'coder'

console.log(escola.charAt(0)) // é possivel viajar entre as palavras usando a função charAt(1) = o  e pasando como parametro o indice que vc quer
console.log(escola.charCodeAt(0))// essa função não retorna um valor caracter e sim sua localização na tabela  ascii,o 'c' representa o 99 em decimal
console.log(escola.indexOf('r')) // a função irá procurar se existe o valor dentro da string e logo depois mostra o indice que o mesmo se encontra.
console.log(escola.substring(1)) // mostra o valor de todos os indice a frente  a partir do indice indicado no parametro 
console.log(escola.substring(1,4)) // ou pode mapear os indice que deve ser exibido nesta caso os indice que estão entre 1 e 4
console.log('escola '.concat(escola)+"!") // a função concat serve para concatenar strings, tambem é possivel usa o + 
console.log(escola.replace(1,'a'))
console.log('Ana,Maria,Pedro'.split(',')) // faz uma separação com base em um palametro passado neste caso é a ","  e depois transforma em um arrey

