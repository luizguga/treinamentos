const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchButton = document.querySelector('.output button');

searchInput.value = '';
searchInput.focus;

const myHistory = [];

searchButton.onclick = ()=>{
    let valueInput = searchInput.value;
    list.innerHTML = '';
    if(valueInput !== ''){
        myHistory.push(valueInput);
    }
    if(myHistory.length === 6){
        myHistory.shift();
    }
    for(let i=0;i<myHistory.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent = myHistory[i];
        list.appendChild(listItem);
    }
    searchInput.value = '';
    searchInput.focus;
}