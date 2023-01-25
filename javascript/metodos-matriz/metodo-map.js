let groceries = [
    {name: "pop() Corn",price:42},
    {name: "Nulled Cider",price:23},
    {name: "Bookworms",price:16},
    {name: "NaN-grain",price: 15},
    {name: "Bug juice",price:8},
    {name: "Grasshopper Gumdrops",price: 4}
]
groceries.reverse()


let printName = (item) => {
    return item.name
}
console.log("> "+groceries.map(printName))

let names = groceries.map((item)=>{return item.name})
console.log("> "+names)

console.log("")

let arr = ['ha','yo']
arr = arr.map((item)=>{return item + item})
console.log("> "+arr)