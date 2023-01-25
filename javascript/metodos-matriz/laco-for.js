let closingTimes = []
for(let i=0;i<7;i++){
    closingTimes.push('5pm')
}
console.log('> '+closingTimes)
for(let i=0;i<closingTimes.length;i+=2){
    closingTimes[i] = '9pm'
}
console.log('> '+closingTimes)

let fruits = ['pineapple', 'papaya', 'raspeberry', 'kiwi', 'mango']

for(let i=1;i<fruits.length;i+=3){
    console.log(fruits[i])
}