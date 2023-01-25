let recursao = (num) => {
    if(num === 1){
        return num
    }else{
        num--
        return recursao(num)
    }
}
console.log(recursao(5))

console.log("")

let fatorial = (n) => {
    if(n === 1){
        return n
    }else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))