function random(number){
    return Math.floor(Math.random()*number);
}

function bgChange(){
    const rdnColor = `rgb(${random(255)},${random(255)},${random(255)})`
    return rdnColor
}

const blocos = document.querySelectorAll('div.tile');
for(let i=0;i<blocos.length;i++){
    blocos[i].addEventListener('click', function(e){
        e.target.style.backgroundColor = bgChange();
    })
}

const container = document.querySelector('#container');
container.addEventListener('click', (event) => {
    event.target.style.backgroundColor = bgChange();
})