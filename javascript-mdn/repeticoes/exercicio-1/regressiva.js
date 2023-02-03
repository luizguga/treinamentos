const saida = document.querySelector('.output')

let i = 10
while(i>=0){
    let listItem = document.createElement('li')
    listItem.textContent = i
    saida.appendChild(listItem)
    i--
}