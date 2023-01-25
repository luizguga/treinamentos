var botao = document.querySelector('button')

botao.onclick = () => {
    var nome = prompt('Qual é o seu nome?')
    alert(`Olá ${nome}, prazer em te ver!`)
}