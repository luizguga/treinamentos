let flightPrices = []

submitPrices(flightPrices,0)

function submitPrices(vetor, preco){
    for(let i = 0; i < 6; i++){
        preco = pickRandom(100,400)
        vetor.push(preco)
    }
}
function pickRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let max = flightPrices[0]
let min = flightPrices[0]

function compareToMaximum(valor){
    max = valor > max ? valor : max
}

function compareToMinimum(valor){
    min = valor < min ? valor : min
}

flightPrices.forEach(compareToMaximum)
flightPrices.forEach(compareToMinimum)

console.log('Prices: '+flightPrices)
console.log('Maximum: '+max)
console.log('Minimum: '+min)