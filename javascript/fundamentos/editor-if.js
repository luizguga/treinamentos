var blue = "blue"
var green = "green"
var color = [blue, green]
var indice = pickRandom(0,color.length-1)

function pickRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(color[indice])
if(color[indice] === blue){
    console.log("------------")
    console.log("rgb(0,0,255)")
    console.log("------------")
}