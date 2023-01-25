var x = criarVetor()
var y = criarVetor()
var indiceUm = pickRandom(0,x.length - 1)
var indiceDois = pickRandom(0,y.length - 1)

function criarVetor(){
    let vetor = []
    for(let i=1;i<=15;i++){
        vetor.push(i)
    }
    return vetor
}

function pickRandom(min,max){
    min = Math.floor(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(`x is ${x[indiceUm]}`)
console.log(`y is ${y[indiceDois]}`)

if(x[indiceUm] > 3 && y[indiceDois] < 11){
    console.log("x é maior que 3, e y é menor que 11")
}
if(x[indiceUm] > 10 || y[indiceDois] > 10){
    console.log("x ou y, ou os dois, são maiores que 10")
}