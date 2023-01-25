let groceries = [
    {name: "pop() Corn",price:42},
    {name: "Nulled Cider",price:23},
    {name: "Bookworms",price:16},
    {name: "NaN-grain",price: 15},
    {name: "Bug juice",price:8},
    {name: "Grasshopper Gumdrops",price: 4}
]

function printItem(item){
    console.log("> "+item.name+": $"+item.price)
}

groceries.forEach(printItem)
groceries.reverse()
groceries.forEach(printItem)