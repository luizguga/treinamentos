var ingredientes = ["farinha", "açúcar", "ovos"]

function verificarReceita(i){
    if(ingredientes.length === 3){
        console.log("Você fez um bolo!")
    }else{
        if(3-i.length === 1){
            console.log(`Falta ${3-i.length} ingrediente`)
        }else{
            console.log(`Faltam ${3-i.length} ingredientes`)
        }
    }
}

verificarReceita(ingredientes)