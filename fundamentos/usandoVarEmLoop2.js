const funcs =[]
for(var i= 0;i<10;i++){
    funcs.push(function(){
        console.log(1)
    })
}

funcs[2]() // aqui aconteceu um erro de escopo da declaração 'var' , onde o js não respeita o 'i' na função
funcs[8]()