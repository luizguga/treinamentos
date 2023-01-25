let televisions = [
    {size: '32"', price: 181.02},
    {size: '40"', price: 258.98},
    {size: '50"', price: 353.55},
    {size: '55"', price: 407.89},
    {size: '60"', price: 464.76}
]
function prinTV(tv){
    console.log(tv.size+' for $'+tv.price)
}

televisions.forEach(prinTV)
let smallTV = televisions.shift()
smallTV.price /= 2
televisions.unshift(smallTV)
console.log("Updated list:")
televisions.forEach(prinTV)

let arr = [5,3,1]
arr.shift()
arr.unshift(1)
console.log("> "+arr)