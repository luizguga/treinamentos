var choice = 'sunny';
var temperature = Math.floor(Math.random()*150)+1;

if(choice === 'sunny' && temperature < 86){
    console.log('It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.');
}else if(choice === 'sunny' && temperature >= 86){
    console.log('It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.');
}