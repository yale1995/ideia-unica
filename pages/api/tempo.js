async function tempo(request, response) {
    const dynamicDate = new Date()

    const endereco = await fetch("https://viacep.com.br/ws/59090900/json/")
    const enderecoJson = await endereco.json()
    const {logradouro, bairro} = enderecoJson

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json({
       date: dynamicDate.toGMTString() ,
       endereço: {
        logradouro,
        bairro
       }
    })
}

export default tempo