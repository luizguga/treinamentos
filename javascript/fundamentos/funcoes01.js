function half(value){
    return value / 2
}
let x = 3479
console.log(half(x))

function jokenpo(){
    let escolha = ["pedra", "papel", "tesoura"]
    let indice = pickRandom(0,escolha.length-1)
    return escolha[indice]
}
function pickRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(jokenpo())