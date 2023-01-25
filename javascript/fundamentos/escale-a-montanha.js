console.log("Estou indo escalar a montanha:")

var minhaMochila = {comida:['bananas', 'nozes', 'barra de cereal'], equipamento:['mapa', 'bússola'], roupas:['lenço', 'jaqueta', 'chapéu']}

console.log("Minha mochila:")
console.log("Comida: "+minhaMochila.comida.join(", "))
console.log("Equipamento: "+minhaMochila.equipamento.join(", "))
console.log("Roupas: "+minhaMochila.roupas.join(", "))

console.log("")

var elevation = 100
console.log("Elevação (pés): ")
console.log(elevation)
elevation = elevation + 455
console.log(elevation)

console.log("")

var outraMochila = {comida:["biscoitos", "chocolate", "uvas passa"], equipamento:['mapa', 'bússola', "corda"]}
console.log("Outra mochila: ")
console.log("")
console.log("Comida:")
for(let comida of outraMochila.comida){
    console.log(comida)
}
console.log("")
console.log("Equipamento:")
for(let equip of outraMochila.equipamento){
    if(equip === "corda"){
        console.log("Achei a corda!")
    }else{
        console.log(`${equip} não é útil agora.`)
    }
}