var moeda = ["cara", "coroa"]
var indice = pickRandom(0,moeda.length-1)

function pickRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var ultimaJogada = moeda[indice]

console.log("> " + ultimaJogada)
if(ultimaJogada === "cara"){
    console.log("   ----------")
    console.log("  ------------")
    console.log(" -----Cara-----")
    console.log("  ------------")
    console.log("   ----------")
}else{
    console.log("   ----------")
    console.log("  ------------")
    console.log(" -----Coroa----")
    console.log("  ------------")
    console.log("   ----------")
}