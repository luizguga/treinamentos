var customColor = {red:255,green:255,blue:0}

console.log(`rgb(${customColor.red}, ${customColor.green}, ${customColor.blue})`)
console.log(`rgb(${customColor['red']}, ${customColor['green']}, ${customColor['blue']})`)


var nome = {primeiro:"Cláudio", segundo:"César", final:"Santos"}

console.log(`Nome completo: ${nome.primeiro} ${nome.segundo} ${nome.final}`)
console.log(`Nome completo: ${nome['primeiro']} ${nome['segundo']} ${nome['final']}`)