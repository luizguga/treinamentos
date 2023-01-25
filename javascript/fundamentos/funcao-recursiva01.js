/* Substituindo palavras em uma string recursivamente */
var texto = "Eu estudo JavaScript no Grasshopper, o Grasshopper me ajudou bastante a entender programação e aprender minha primeira linguagem. Obrigado Grasshopper!"

function substituir(string, oldPart, newPart){
    if(string.includes(oldPart) === false){
        return string
    } else {
        string = string.replace(oldPart, newPart)
        return substituir(string, oldPart, newPart)
    }
}
let novoTexto = substituir(texto, "hopper", "jumper")
console.log(novoTexto)
/*---------------------------------------------------*/

/* Cauculando o fatorial com uma função recursiva */
var fatorial = 10
var controle = fatorial - 1
var resultado = calcular(fatorial, controle)

function calcular(num,cont){
    if(cont == 1){
        return num
    }else{
        num = num * cont
        cont--
        return calcular(num, cont)
    }
}

console.log("O resultado do fatorial de " + fatorial + " é: " + resultado)
/*------------------------------------------------------------------------*/