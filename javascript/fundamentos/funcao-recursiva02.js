let enviarCartoes = (montante) => {
    console.log(`Cartão postal ${montante} enviado.`)
    if(montante === 1){
        console.log("Todos os cartôes postais foram enviados.")
        return montante
    }else{
        montante--
        console.log("Cartão postal sendo enviado...")
        return enviarCartoes(montante)
    }
}
enviarCartoes(3)

console.log("")

let travelDocument = 'Hello grasshoper! You will be going to Bali. Your travel code is: "im1grasshoper" Enjoy your trip grasshoper'

let updateAllNames = (string,oldPart,newPart) => {
    if(string.includes(oldPart) === false){
        return string
    }else{
        string = string.replace(oldPart,newPart)
        return updateAllNames(string,oldPart,newPart)
    }
}
console.log(travelDocument)
console.log(updateAllNames(travelDocument,'hoper','hopper'))