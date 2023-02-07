function random(number){
    return Math.floor(Math.random()*(number+1))
}

const botao = document.querySelector('button')

function bgChange(){
    let randomColor = `rgb(${random(255)},${random(255)},${random(255)})`
    document.body.style.backgroundColor = randomColor
}
botao.onclick = bgChange

/*
botao.onclick = ()=>{
    let randomColor = `rgb(${random(255)},${random(255)},${random(255)})`
    document.body.style.backgroundColor = randomColor
}*/