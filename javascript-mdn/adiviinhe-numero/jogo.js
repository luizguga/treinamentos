let numeroAleatorio = Math.floor(Math.random()*100)+1

let palpites = document.querySelector('.palpites')
let ultimoResultado = document.querySelector('.ultimoResultado')
let baixoOuAlto = document.querySelector('.baixoOuAlto')

let envioPalpite = document.querySelector('.envioPalpite')
let campoPalpite = document.querySelector('.campoPalpite')

let contagemPalpites = 1
let botaoReinicio
campoPalpite.focus()

envioPalpite.addEventListener('click',conferirPalpite)

function conferirPalpite(){
    let palpiteUsuario = Number(campoPalpite.value)
    if(contagemPalpites === 1){
        palpites.textContent = "Palpites anteriores: "
    }
    palpites.textContent += `${palpiteUsuario} `
    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = "Parabéns você acertou"
        ultimoResultado.style.backgroundColor = "green"
        ultimoResultado.style.color = "white"
        ultimoResultado.style.padding = "5px"
        baixoOuAlto.textContent = ''
        configFimDoJogo()
    }else if(contagemPalpites === 10){
        ultimoResultado.textContent = "!!Fim de jogo!!"
        baixoOuAlto.textContent = ''
        configFimDoJogo()
    }else{
        ultimoResultado.textContent = "O número está errado"
        ultimoResultado.style.backgroundColor = "red"
        ultimoResultado.style.color = "white"
        ultimoResultado.style.padding = '5px'
    }
    if(palpiteUsuario > numeroAleatorio){
        baixoOuAlto.textContent = "O número está alto"
    }
    if(palpiteUsuario < numeroAleatorio){
        baixoOuAlto.textContent = "O número está baixo"
    }
    contagemPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
}

function configFimDoJogo(){
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar novo jogo'
    document.querySelector('#conteudo-principal').appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo(){
    contagemPalpites = 1

    let resultadoParas = document.querySelectorAll('.resultadoParas p')
    console.log(resultadoParas)
    console.log(resultadoParas.length)
    for(let i=0;i<resultadoParas.length;i++){
        resultadoParas[i].textContent = ''
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio)

    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()

    ultimoResultado.style.backgroundColor = 'white'

    numeroAleatorio = Math.floor(Math.random()*100)+1
}