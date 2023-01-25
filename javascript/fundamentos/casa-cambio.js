let carteira = 50

function inYen(dol){
    let resultado = dol * 127.70
    return resultado
}

function inBaht(dol){
    let resultado = dol * 33.07
    return resultado
}

console.log("20 dólares são:")
console.log(inYen(20) + " Ienes")
console.log("100 doláres são:")
console.log(inYen(100) + " Ienes")
console.log("")
console.log(carteira+" doláres são:")
console.log(inYen(carteira)+" Ienes")
console.log(inBaht(carteira)+" Bahts Tailandeses")