{ 
    {
         
            {
             var sera = 'será!!!!'  // a o metodo de declação VAR  pode ser usando em todo escopo do programa ou seja fora dos bloco
                                    // salvo se estive dentro de uma função
            }
     }
 }
 console.log(sera);

 function teste(){
     var local = 123
 }


teste()
console.log(local) // a tentativa de pega o valor da varial local que se encontra dentro da função teste fez retorna um erro

var a =123 // a varival "a"  é uma variavel global // deve-se evitar usar variavel global pos pode gerar erro  