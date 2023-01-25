let farmAnimals = ['cabras','vacas','galinhas']
farmAnimals.push('porcos')
farmAnimals.forEach(function (animal) {console.log(animal)})

function printAnimal(animal){
    for(let item of animal){
        console.log(item)
    }
}
printAnimal(farmAnimals)

for(let animal of farmAnimals){
    console.log(animal)
}