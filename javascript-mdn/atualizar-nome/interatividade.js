const saida = document.querySelector("p#name")

saida.addEventListener('click', atualizarNome)

function atualizarNome(){
    let nome = prompt('Digite o novo nome')
    if(nome){
        saida.textContent = `Jogador 1: ${nome}`
    }else if(nome === ''){
        atualizarNome()
    }
}