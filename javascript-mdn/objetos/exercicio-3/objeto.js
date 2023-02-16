const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function(){
        console.log(`Hello, said ${this.name} the ${this.breed}`)
    }
}
const cat2 = {
    name: 'Jalim',
    breed: 'Persa',
    color: 'gray',
    greeting: function(){
        console.log(this.name,this.breed,this.color)
    }
}
cat.greeting()
cat2.greeting()