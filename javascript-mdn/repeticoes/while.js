let cats = ['Bill','Jeff','Pete','Biggles','Jasmin'];
let info = 'My cats are called ';

let i = 0
while(i<cats.length){
    if(i === cats.length-1){
        info += 'and '+cats[i]+'.';
    }else{
        info += cats[i]+', ';
    }
    i++;
}
console.log(info)