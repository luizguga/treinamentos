let goods = ['books', 'clothing', 'eletronics', 'furniture', 'sports', 'toys']
let shoppingList = ['clothing', 'food', 'books', 'toiletries']

for(let item of shoppingList){
    console.log(item+': '+goods.includes(item))
}