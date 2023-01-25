function setAlarm(time){
    console.log(`O alarme foi definido para ${time}.`)
}
function recordShow(time){
    console.log(`Seu show será às ${time}.`)
}

let myAssistant = (time, callBackFunction) => {
    console.log('Agendamento...')
    callBackFunction(time)
    console.log('Completo.')
}

myAssistant('6pm',recordShow)
myAssistant('10am',setAlarm)