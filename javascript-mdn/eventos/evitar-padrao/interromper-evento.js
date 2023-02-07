const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p')

form.addEventListener('submit', function (e){
    if(fname.value === '' || lname.value === ''){
        e.preventDefault();
        para.textContent = 'Você precisa preencher todos os nomes!';
    }
})