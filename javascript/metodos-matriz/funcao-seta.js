let groceries = [
    {name: "pop() Corn",price:42},
    {name: "Nulled Cider",price:23},
    {name: "Bookworms",price:16},
    {name: "NaN-grain",price: 15},
    {name: "Bug juice",price:8},
    {name: "Grasshopper Gumdrops",price: 4}
]
groceries.reverse()
let nameOf = (item) => {
    return item.name
}
let priceOf = (item) => {
    return item.price
}
console.log("> "+nameOf(groceries[0]))
console.log("> "+priceOf(groceries[0]))

let multiplyByTen = (number) => {
    return number * 10
}
console.log("> "+multiplyByTen(5))