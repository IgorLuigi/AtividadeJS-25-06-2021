function monitorarluzes(){
    let luz = false
    setInterval(() => {
        if(luz = luz)
            console.log(luz = "Acesso")
        else(
            console.log(luz = "Apagado")
        )
    }, tempoaleatorio(2000, 4000))
}

function tempoaleatorio(min, max){
    return Math.random() * (max - min) + min;
}

monitorarluzes()

    