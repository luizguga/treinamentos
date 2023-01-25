let numeros = []
let numeroAleatorio 

for(let i=1;i<11;i++){
    numeroAleatorio = pegarRandom(0,100)
    numeros.push(numeroAleatorio)
}
function maior(a,b){
    return a > b ? a : b
}
function maximo(vetor){
    let max = 0
    for(let num of vetor){
        max = maior(num,max)
    }
    return max
}
function pegarRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log("Números: "+numeros)
console.log("Maior número: "+maximo(numeros))