function compras (trabalho1,trabalho2){
        const comprarSorvete = trabalho1 || trabalho2 // usa-se o simbolo pIpe(||) para representar o operador logico OU

        const comprarTv50 = trabalho1 && trabalho2
        //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise faz uma verificação bit a bit xor exclusivo
        const comprarTv32 = trabalho1 != trabalho2 // xor esclusivo sem usar o bitwise

        const manterSaudavel = !comprarSorvete // negação logica de comprar sorvete 

        return {comprarSorvete, manterSaudavel,comprarTv32,comprarTv50}



    }

    console.log(compras(true,true))
    console.log(compras(true,false))
    console.log(compras(false,true))
    console.log(compras(false,false))