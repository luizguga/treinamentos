const list = document.querySelector('.output ul')

let cities = [
    'lonDon',
    'ManChester',
    'BiRmiNGHAN',
    'liVERpoOL'
]

for(let i=0;i<cities.length;i++){
    let input = cities[i]
    input = input.toLocaleLowerCase()
    let letter = input[0]
    letter = letter.toUpperCase()
    let result = input.replace(input[0], letter)

    let listItem = document.createElement('li')
    listItem.textContent = result
    list.appendChild(listItem)
}