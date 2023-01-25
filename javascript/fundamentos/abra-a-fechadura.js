var acharAchave = ["sim","não"]
var indice = pickRandom(0, acharAchave.length - 1)
var numeroPin = 10

function pickRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(`> Achar a chave:  ${acharAchave[indice]}`)
console.log(`> Número pin: ${numeroPin}`)

if(acharAchave[indice] === "sim" && numeroPin === 10){
    console.log("Você abriu a fechadura!")
}
if(acharAchave[indice] === "não" && numeroPin === 10){
    console.log("O número pin está ok, mas você não encontrou a chave.")
}