let cats = ['Bill','Jeff','Pete','Biggles','Jasmin'];
let info = 'My cats are called ';

let i = 0
do {
    if(i === cats.length-1){
        info += 'and '+cats[i]+'.'
    }else{
        info += cats[i]+', '
    }
    i++
}while(i<cats.length)

console.log(info)