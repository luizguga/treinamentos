var cores = ["blue", "red", "yellow", "orange", "green", "purple", "black","white"]
var numero
function drawBox(cor,num){
    num = getRandomInt(0, cor.length)
    let resultados = document.querySelector("div#res")
    resultados.innerHTML = `<div id="qcor" style="height: 40px; width: 40px; background-color: ${cor[num]};"></div> ${cor[num]}`
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}