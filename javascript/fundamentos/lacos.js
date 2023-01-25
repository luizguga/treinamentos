var array = ["apples", "yogurte", "toothpaste"]

console.log("Método for:")
for(var i = 0; i<array.length; i++){
    console.log(array[i])
}

console.log("----------------")

console.log("Método for of:")
for(var element of array){
    console.log(element)
}

console.log("----------------")

console.log("Método for in:")
for(var i in array){
    console.log(array[i])
}

console.log("----------------")

console.log("Método do while:")
var i = 0
do {
    console.log(array[i])
    i++
} while (i<array.length)

console.log("----------------")

console.log("Método while:")
i = 0
while (i<array.length){
    console.log(array[i])
    i++
}