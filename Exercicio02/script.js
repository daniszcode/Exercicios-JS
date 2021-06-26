const totalEleitorado = 100
const totalVotos = 70
const arrayVotos = [{brancos: 10},
     {nulos: 20},
     {validos: 50}
]

 arrayVotos.forEach((arrayVotos) => {
    resBrancos = arrayVotos.brancos * totalVotos / 100
    resNulos = arrayVotos.nulos * totalVotos / 100
    resValidos = arrayVotos.validos * totalVotos / 100
    
    console.log(`Quantidade de eleitorado: ${totalEleitorado}
    Quantidade de votos: ${totalVotos}
    Quantidade de votos em branco: ${arrayVotos.brancos}, porcentagem: ${resBrancos}
    Quantidade de votos em nulos: ${arrayVotos.nulos}, porcentagem: ${resNulos}
    Quantidade de votos em validos: ${arrayVotos.validos}, porcentagem: ${resValidos}`)


});