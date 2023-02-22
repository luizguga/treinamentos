const input = document.getElementById('jscode')
const btn = document.querySelector('button')
const para = document.querySelector('p')

btn.onclick = function(){
    let code = input.value
    para.textContent = eval(code)
}

class Person {
    constructor(first,last,age,gender,interests){
        this.name = {
            first,
            last
        }
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    greeting(){
        console.log(`Hi! I'm ${this.name.first}`)
    }

    farewell(){
        console.log(`${this.name.first} has left the building. By for now!`)
    }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling'])
han.greeting()
let leia = new Person('Leia', 'Organa', 19, 'female', ['Government'])
leia.farewell()

class Teatcher extends Person {
    constructor(first,last,age,gender,interests,subject,grade){
        super(first,last,age,gender,interests)

        this._subject = subject
        this.grade = grade
    }

    get subject() {
        return this._subject
    }

    set subject(newSubject) {
        this._subject = newSubject
    }
}

let snape = new Teatcher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5)
snape.greeting()
snape.farewell()
console.log(snape.age)

console.log(snape.subject)
snape.subject = 'Balloon animals'
console.log(snape.subject)

class Student extends Person {
    constructor(first,last,age,gender,interests){
        super(first,last,age,gender,interests)
    }
}
let jaden = new Student('Jaden', 'Brown', 13, 'male', ['archery','basketball'])
jaden.greeting()
jaden.farewell()
console.log(jaden.age)
console.log(jaden.interests[0])