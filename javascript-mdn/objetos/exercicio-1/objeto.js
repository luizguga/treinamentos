const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function(){
        console.log('Meow!')
    }
}
cat.greeting()
let catName = cat['name']
cat.color = 'black'

const section = document.querySelector('section')

const para1 = document.createElement('p')
const para2 = document.createElement('p')

para1.textContent = `The cat's name is ${catName}`
para2.textContent = `The cat's color is ${cat.color}`

section.appendChild(para1)
section.appendChild(para2)