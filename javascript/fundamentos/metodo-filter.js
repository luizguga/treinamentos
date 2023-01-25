let flights = ['8am','12pm','6am']
let trains = ['7pm','11am','3pm']
let buses = ['10am','2pm','4pm']

let derpatures = [...flights, ...trains, ...buses]

let morning = (time) => {
    return time.includes('am')
}

let evening = (time) => {
    return time.includes('pm')
}

let amTimes = derpatures.filter(morning)
let pmTimes = derpatures.filter(evening)

console.log('Day times: '+amTimes)
console.log('NIght times: '+pmTimes)