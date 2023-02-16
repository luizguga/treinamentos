const cats = {
    name: ['Bertie','Jalim'],
    breed: ['Cymric','Persa'],
    color: ['white','gray'],
    greeting: function(){
        for(let i=0;i<this.name.length;i++){
            console.log(`Hello, said ${this.name[i]} the ${this.breed[i]}`)
        }
    }
}
cats.greeting()