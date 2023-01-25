let respostas = ["sim", "não", "talvez", "nunca", "sempre"]
let indice = pickRandom(0,respostas.length)
let ultimaResposta = respostaAleatoria(respostas,indice)

function respostaAleatoria(r,n){
    return r[n]
}
function pickRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(ultimaResposta)