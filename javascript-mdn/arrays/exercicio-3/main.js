const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

customName.focus()

function randomizeValue(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let string = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let newStory = string

const personagem = ['Willy the Goblin','Big Daddy','Father Christmas'];
const lugar = ['the soup kitchen','Disneyland','the White House'];
const acontecimento = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result(){
    if(customName.value !== ''){
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    if(document.getElementById('uk').checked){
        let weighs = Math.round(300*0.453592) + ' stone';
        let temperature = Math.round(94/33.8) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit',temperature);
        newStory = newStory.replace('300 pounds', weighs);
    }
    newStory = newStory.replace(':insertx:',randomizeValue(acontecimento));
    newStory = newStory.replace(':inserty:',randomizeValue(lugar));
    newStory = newStory.replace(':insertz:',randomizeValue(personagem));
    newStory = newStory.replace(':insertx:',randomizeValue(acontecimento));
    story.textContent = newStory;
    newStory = string;
    customName.value = '';
    customName.focus();
    story.style.visibility = 'visible';
}