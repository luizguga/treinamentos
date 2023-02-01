const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = ()=>{
    const mes = select.value;
    let days;
    let anoBissexto = false;
    if(mes === 'janeiro' || mes === 'março' || mes === 'maio' || mes === 'julho' || mes === 'agosto' || mes === 'outubro' || mes === 'dezembro'){
        days = 31;
    }else if(mes === 'fevereiro'){
        days = 28;
        if(anoBissexto){
            days = 29;
        }
    }else{
        days = 30;
    }
    createCalendar(days,mes)
}

function createCalendar(days, choice){
    list.innerHTML = '';
    h1.textContent = '';
    const fLetter = choice[0].toUpperCase()
    h1.textContent = choice.replace(choice[0], fLetter);
    for(let i=0;i<=days;i++){
        let listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}