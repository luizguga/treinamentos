document.addEventListener("DOMContentLoaded", function (){
    function createParagraph(){
        let para = document.createElement('p')
        para.innerText = "Parágrafo criado"
        document.body.appendChild(para)
    }
    
    const buttons = document.querySelectorAll('button')
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',createParagraph)
    }
})

