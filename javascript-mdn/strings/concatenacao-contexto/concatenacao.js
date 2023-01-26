const botao = document.querySelector('button');

botao.onclick = ()=>{
    let nome = prompt("Qual o seu nome?");
    alert("Olá "+nome+" prazer em tê-lo aqui!");
}