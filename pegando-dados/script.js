let textn = document.querySelector("input#inome")
let years = document.querySelector("input#iidade")
let sfem = document.querySelector("input#fem")
let sex = "Masculino"
let data = []

function dados(){
    n = textn.value
    y = years.value
    if(n && y){
        if(sfem.checked){
            sex="Feminino"
        }else{
            sex="Masculino"
        }

        lastusu = {nome: n, idade: y, sexo: sex}

        data.push(lastusu)
        textn.value = ""
        years.value = ""

        console.log(data)

        mostrar(data)
    }else{
        alert("Preencha todos os campos corretamente")
    }
}

function mostrar(dados){
    maioridade = document.querySelector("div#maiores")
    maioridade.innerHTML = "<h2>Usuários maiores de idade:</h2>"

    menoridade = document.querySelector("div#menores")
    menoridade.innerHTML = "<h2>Usuários menores de idade:</h2>"
    for(let object of dados){
        if(object.idade > 17){
            maioridade.innerHTML += `<p>
                                    Nome: ${object.nome}<br>
                                    Idade: ${object.idade}<br>
                                    Sexo: ${object.sexo}</p>` 
        }else{
            menoridade.innerHTML += `<p>
                                    Nome: ${object.nome}<br>
                                    Idade: ${object.idade}<br>
                                    Sexo: ${object.sexo}</p>` 
        }
    }
}