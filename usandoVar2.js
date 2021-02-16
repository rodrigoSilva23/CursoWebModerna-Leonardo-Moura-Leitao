var numero =1 // esse exemplo mostra a importancia de fugir do escopo global

{
    var numero = 2 // var ignora o bloco e sobescreve 
    console.log('dentro=', numero)
}

console.log('fora=', numero)

// variavel decladas no formato var tem escopo global , e de função
