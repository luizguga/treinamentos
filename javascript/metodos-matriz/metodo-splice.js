let shirtSizes = ['S','M','L','XXL']
let startPoint = 1
let itensToReplace = 2
let newItem = 'XL'
console.log("> old: "+shirtSizes)
shirtSizes.splice(startPoint,itensToReplace,newItem)
console.log("> new: "+shirtSizes)

console.log("")

let array = ['A','L','A','S','K','A']
array.splice(4,0,"B","C","D")
console.log("> "+array)

console.log("")

array = ['a','b','c','d']
array.splice(1,1,1)
console.log("> "+array)