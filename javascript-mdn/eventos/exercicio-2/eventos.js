function random(number){
    return Math.floor(Math.random()*(number+1));
}

const botao = document.querySelector('button');

function bgChange(e){
    let randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    e.target.style.backgroundColor = randomColor
    console.log(e)
}
//botao.onmouseout = bgChange;

botao.addEventListener('mouseout', bgChange);
botao.removeEventListener('mouseout', bgChange);
botao.addEventListener('mousemove', bgChange)
botao.addEventListener('mousemove', function (){
    botao.style.borderSize = '2px'
    botao.style.borderStyle = 'solid'
    botao.style.borderColor = `rgb(255,${random(255)},${random(255)})`
})
/*
botao.onclick = ()=>{
    let randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = randomColor;
}*/