var substantivos = ["Coveiros", "Dragões", "Demônios"]
var adjetivos = ["Mortíferos", "Irados", "Caídos"]

console.log("Gerando nomes de bandas com laços aninhados:")
for(let subs of substantivos) {
    for(let adj of adjetivos) {
        console.log(`Os ${subs} ${adj}`)
    }
}
console.log("---------------------------------------------------------")

console.log("Exemplo para entender melhor como funciona:")
for(let placo=1;placo<5;placo++){
    for(let slaco=1;slaco<5;slaco++){
        console.log(`Repetição do primeiro laço ${placo}, repetição do segundo laço ${slaco}`)
    }
}