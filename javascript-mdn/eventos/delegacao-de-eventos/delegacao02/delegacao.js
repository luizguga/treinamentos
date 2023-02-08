document.querySelector('div#myDiv').addEventListener('click',(e)=>{
    if(e.target && e.target.matches("a.classA")){
        console.log('Anchor element clicked!')
    }
})