// intendendo um pouco sobre valores numericos 

const peso1 = 1.0;
const peso2 = Number("2.0"); // conversao de variavel


console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // verifica o tipo de variavel de peso 1
console.log(Number.isInteger(peso2)); // aqui ele deixa de ser um numero inteiro e se trasforma em um float ja que o valor esta 2,1

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFided é uma função para o tipo numble usada para controla casas decimais. 
console.log(media.toString(2)); // essa função tranforma em binarios

