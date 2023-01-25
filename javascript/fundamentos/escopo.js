var x = 20
if(x < 21){
    let x = 10
    console.log(x)
}
console.log(x)

var numeroGlobal = 30
if(numeroGlobal){
    const numeroLocal = 14
    console.log(numeroLocal)
}
/*var calculoImpossivel = numeroGlobal + numeroLocal*/
console.log(numeroGlobal)

var cor = 'yellow'
console.log(cor)
for(let cor of ['azul','green']){
    console.log(cor)
}
console.log(cor)