const select = document.querySelector('select');
const html = document.querySelector('html');

select.onchange = ()=>{
    let tema = select.value
    switch(tema){
        case 'black':
            update('black','white')
        break;
        case 'purple':
            update('purple','white')
        break;
        case 'yellow':
            update('yellow','black')
        break;
        case 'psychedelic':
            update('red','lightgreen')
        break;
        case 'white':
            update('white','black')
        break;
    }
}

function update(bgColor, textColor){
    html.style.backgroundColor = bgColor
    html.style.color = textColor
}