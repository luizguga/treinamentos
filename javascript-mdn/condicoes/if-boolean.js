// Qualquer valor que não seja false, undefined, null, 0, NaN, ou uma string vazia ('') retorna true

var cheese = ''; // Retorna false

if(cheese){
    console.log('Yay! Cheese available for making cheese on toast.');
}else{
    console.log('No cheese on toast for you today.');
}

var shoppingDone = false;

if(shoppingDone){
    var childsAllowance = 10;
}else{
    var childsAllowance = 5;
}

console.log(childsAllowance)