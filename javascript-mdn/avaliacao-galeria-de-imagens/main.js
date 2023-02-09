const img = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')
const btn = document.querySelector('button')
const div = document.querySelector('.overlay')

const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
}

for(const image of images){
    let newImage = document.createElement('img')
    newImage.setAttribute('src', `images/${image}`)
    newImage.setAttribute('alt', alts[image])
    thumbBar.appendChild(newImage)
    newImage.addEventListener('click',(e)=>{
        img.src = e.target.src
        img.alt = e.target.alt
    })
}

btn.addEventListener('click', function (){
    let btnClass = btn.getAttribute('class')
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'lighten')
        btn.textContent = 'Lighten'
        div.style.backgroundColor = 'rgb(0,0,0,.3)'
    }else{
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Dark'
        div.style.backgroundColor = 'transparent'
    }
})