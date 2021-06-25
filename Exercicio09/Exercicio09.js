function escrevermaiusculo(string){
    return new Promise((resolve, reject) =>{
        let Resultado

        console.log('Esperando...')
        setTimeout(() => {
            if(typeof string === 'string'){
                Resultado = {
                    situacao: 1,
                    escrita: string.toUpperCase()
                }
            }
            else{
                Resultado = {
                    situacao: 2,
                    escrita: "the request value is not supported."
                }
            }

            if(Resultado.situacao === 1) resolve(Resultado)
            else reject(Resultado)
        }, 2000)
    })
}

escrevermaiusculo(99999-9999)
    .then(e => {
        const { escrita } = e
        console.log(`\nA palavra ficará desta forma com todas as letras em maiúsculo: ${escrita}\n`)
    })
    .catch(e => {
        const { situacao, escrita } = e
        if (situacao === 2) console.log(`\n${situacao}: ${escrita}`)
    })

escrevermaiusculo("Igor Luigi de Oliveira")
    .then(e => {
        const { escrita } = e
        console.log(`\nA palavra ficará desta forma com todas as letras em maiúsculo: ${escrita}\n`)
    })
    .catch(e => {
        const { situacao, escrita } = e
        if (situacao === 2) console.log(`\n${situacao}: ${escrita}`)
    })

