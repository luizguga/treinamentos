let viajarCidades = [{cidade: 'Springfield',transporte: 'train'}]
let ultimo = viajarCidades[viajarCidades.length-1]
console.log(ultimo.cidade)
console.log(ultimo.transporte)

let boatAtlanta = {cidade: 'Atlanta', transporte: 'boat'}

viajarCidades.push(boatAtlanta)
ultimo = viajarCidades[viajarCidades.length-1]
console.log(ultimo.cidade)

let atlantaTravel = viajarCidades.pop()
atlantaTravel.transporte = 'hovercraft'
viajarCidades.push(atlantaTravel)
ultimo = viajarCidades[viajarCidades.length-1]
console.log(ultimo.transporte)