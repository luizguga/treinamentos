var customColor = {red:pickRandom(0,255), green:pickRandom(0,255), blue:pickRandom(0,255)}

function pickRandom(min,max){
    return Math.floor(Math.random() * (max - min)) + min
}

console.log("Azul: "+customColor.blue)
if(customColor['blue'] > 200){
    console.log("O azul ultrapassou 200")
}else{
    console.log("O azul não ultrapassou 200")
}