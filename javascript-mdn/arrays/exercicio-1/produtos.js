const list = document.querySelector('.output ul')
const totalBox = document.querySelector('.output p')

let total = 0
list.innerHTML = ''
totalBox.textContent = ''

let produtos = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'
]
for(let i=0;i<produtos.length;i++){
    produtos[i] = produtos[i].split(':')
    let price = Number(produtos[i][1])
    total = total + price

    let listItem = document.createElement('li')
    listItem.textContent = price.toFixed(2)
    list.appendChild(listItem)
}
totalBox.textContent = "Total: $"+total.toFixed(2)