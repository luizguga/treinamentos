var iceCreamVanOutside = false;
var houseStatus = 'onfire';

if(!(iceCreamVanOutside || houseStatus === 'onfire')){
    console.log('You should leave the house quickly.');
}else{
    console.log('Probably should just stay in then.');
}