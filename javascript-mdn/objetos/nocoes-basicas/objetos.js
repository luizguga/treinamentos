let pessoa = {
    nome: {
        primeiro: 'Bob',
        ultimo: 'Smith'
    },
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function () {
        alert(this['nome']['primeiro'] + ' ' + this.nome.ultimo + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.')
    },
    saudacao: function () {
        alert('Oi! Eu sou ' + this.nome[0] + '.')
    }
}
let myDataName = 'altura'
let myDataValue = '1.75m'

pessoa[myDataName] = myDataValue

pessoa.idade = 42
pessoa['nome']['ultimo'] = 'Cratchit'
/*
const html = document.querySelector('html')
html.addEventListener('load', pessoa.saudacao())
html.addEventListener('load', pessoa.bio())*/
