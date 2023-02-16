function Person(first,last,age,gender,interests){
    this.name = {
        'first' : first,
        'last' : last
    }
    this.fullName = this.name.first + ' ' + this.name.last
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function(){
        let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. '
        let pronoun

        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M'){
            pronoun = 'He likes'
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F'){
            pronoun = 'She likes'
        }else{
            pronoun = 'They likes'
        }

        string += pronoun

        if(this.interests.length === 1){
            string += this.interests[0] + '.'
        }else if(this.interests.length === 2){
            string += this.interests[0] + ' and ' + this.interests[1] + '.'
        }else{
            for(let i=0;i<this.interests.length; i++){
                if(i === this.interests.length - 1){
                    string += 'and ' + this.interests[i] + '.'
                }else{
                    string += this.interests[i] + ', '
                }
            }
        }
        alert(string)
    }
    this.greeting = function(){
        alert('Hi! I\'m ' + this.name.first + '.')
    }
}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing'])

person1.greeting()
person1.bio()

Person.prototype.farewall = function(){
    alert(this.name.first + ' has left the building. Bye for now!')
}
person1.farewall()
console.log(person1.fullName)