let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let admitted = document.querySelector('.admitted');
let refused = document.querySelector('.refused');
admitted.textContent = 'Adimitidos: ';
refused.textContent = 'Recusados: ';

let i = 0;
while(i<people.length){
    if(people[i] === 'Phil' || people[i] === 'Lola'){
        if(people[i] === 'Lola'){
            refused.textContent += people[i]+'.'
        }else{
            refused.textContent += people[i]+', '
        }
    }else{
        if(i === people.length-1){
            admitted.textContent += people[i]+'.'
        }else{
            admitted.textContent += people[i]+', '
        }
    }
    i++
}