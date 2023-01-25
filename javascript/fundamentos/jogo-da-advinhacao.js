var pea = [1,2,3]
var indice = pickRandom(0,pea.length - 1)

function pickRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max + min + 1)) + min
}

if(pea !== 1){
    console.log("Not under shell 1")
}
if(pea !== 3){
    console.log("Not under shell 3")
}