let televisions = [
    {size: '32"', price: 182.02},
    {size: '40"', price: 258.98},
    {size: '50"', price: 353.55},
    {size: '55"', price: 407.89},
    {size: '60"', price: 464.76}
]
function prinTV(tv){
    console.log(tv.size+' for $'+tv.price)
}
televisions.forEach(prinTV)
console.log('The top item has:')
prinTV(televisions.shift())
console.log('The next smallest TV:')
prinTV(televisions.shift())