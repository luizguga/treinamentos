var chat
chat = "Tchau"
console.log(chat)

if(chat.includes("oi" || chat.includes("Oi"))){
    console.log("Oi, posso ajudá-lo a achar um destino?")
}
if(chat.includes("tchau") || chat.includes("Tchau")){
    console.log("Até logo, tenha uma boa viagem!")
}

var palavra = "macarrão"
var letras = "tem XX letras"
if(letras.includes("XX")){
    letras = letras.replace("XX", palavra.length)
    console.log(`A palavra ${palavra} ${letras}`)
}