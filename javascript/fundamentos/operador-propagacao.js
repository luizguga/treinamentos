let flights = ['8am','12pm','6am']
let trains = ['7pm','11am','3pm']
let buses = ['10am','2pm','4pm']

let derpatures = [...flights, ...trains, ...buses]

for(let time of derpatures){
    console.log('> '+time)
}
console.log(derpatures.length+' total times')