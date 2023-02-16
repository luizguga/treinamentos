function Person(first,last,age,gender,interests){
    this.first = first
    this.last = last
    this.age = age
    this.gender = gender
    this.interests = interests
}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing'])
var person2 = Object.create(person1)
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing'])

console.log(Person.prototype)
console.log(person2.first)
console.log(person2.__proto__)
console.log(person1.constructor)
console.log(person2.constructor)
console.log(person3.__proto__.__proto__)
console.log(person3.first)
console.log(person3.age)
console.log(person3.interests[0])
console.log(person3.bio())