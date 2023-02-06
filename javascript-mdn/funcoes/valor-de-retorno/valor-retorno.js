const input = document.querySelector('.numberinput');
const para = document.querySelector('p');

function squared(num){
    return num * num;
}

function cubed(num){
    return num * num * num;
}

function factorial(num){
    let x = num;
    while(x>1){
        num *= x-1;
        x--;
    }
    return num;
}
function quadrado(num){
    let quadrados = []
    for(let i=1;i<num;i++){
        if(Math.floor(Math.sqrt(i)) === Math.sqrt(i)){
            quadrados.push(i)
        }
    }
    return quadrados
}
input.onchange = ()=>{
    let num = input.value;
    if(isNaN(num)){
        para.textContent = 'You need to enter a number!';
    }else{
        para.textContent = num + ' squared is '+squared(num)+', '+
                            num + ' cubed is '+cubed(num)+', '+
                            num + ' factorial is '+factorial(num)+', '+
                            num + ' perfect cubed '+quadrado(num)+'.';
    }
}