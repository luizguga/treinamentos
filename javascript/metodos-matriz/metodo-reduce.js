let hours = [8,8,6,0,8,8,12]
let prices = [4,8,15,16,23,42]

console.log("> Hours: "+hours)
let totalHours = hours.reduce((sum,today)=>{return sum + today},0)
console.log("> Total hours: "+totalHours)

console.log("> Prices: "+prices)
let totalPrices = prices.reduce((sum,total)=>{return sum + total},0)
console.log("> Total prices: "+totalPrices)

console.log("")

let array = [1,2,3,4,5]
console.log("> Array: "+array)
let total = array.reduce(function (accumulator, current){return accumulator + current}, 0)
console.log("> Total: "+total)

console.log("")

let numbers = [2,6,4]
console.log("> Numbers: "+numbers)
let result = numbers.reduce((accumulator,number)=>{return accumulator + number}, 0)
console.log("> Result: "+result)