const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.addEventListener('click',function () {
    para.textContent = ''
    let num = Number(input.value);
    input.value = ''
    input.focus()
    for(let i=1;i<=num;i++){
        let sqRoot = Math.sqrt(i); //Raiz quadrada
        if(Math.floor(sqRoot) !== sqRoot){
            continue;
        }
        para.textContent += i + ' ';
    }
})