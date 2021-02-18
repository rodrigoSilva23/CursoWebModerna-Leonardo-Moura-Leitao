const funcs =[]
for(let i= 0;i<10;i++){
    funcs.push(function(){
        console.log(1)
    })
}

funcs[2]() // a função vai funcionar ja que o let respeita o escopo de bloco 
funcs[8]()