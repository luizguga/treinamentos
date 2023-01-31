const select = document.querySelector('select');
const html = document.querySelector('html');

document.body.style.padding = '10px';

function changeTheme(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function (){
    (select.value === 'black') ? changeTheme('black','white') : changeTheme('white', 'black');
}