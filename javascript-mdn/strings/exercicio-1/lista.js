const list = document.querySelector('.output ul')

let greatings = [
    'Happy Birthday',
    'Merry Christmas my love',
    'A happy Christmas to the all family',
    'You\'re all I want for Christmas',
    'Get well soon'
]

for(let i=0;i<greatings.length;i++){
    if(greatings[i].indexOf('Christmas') !== -1){
        let listItem = document.createElement('li')
        listItem.textContent = greatings[i]
        list.appendChild(listItem)
    }
}