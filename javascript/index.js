
var a = 123 // variable
var b = '4'
var ab = 'esto es una cadena de texto'// variable
var array = [1, '12432', 12.44345] // arreglo
var obj = {name: 'Juan', age: 23} // objeto
const INDEX = 0 // constante
const isTrue= true // boolean

var sum = a + b // suma 

console.log("Este es el resultado de la suma", sum)
console.log("Este es el objeto", obj)
console.log("Este es el name del objeto", obj.name)
console.log("Esta es la variable y es un numero", a)
console.log("Esta es la variable y es un text", ab)
console.log("Este es la posicion 1 del arreglo", array[INDEX])

// Escribe un if que compare si la variable a es igual a 123

if (a == '123') {
    console.log("Es igual")
} else {    
    console.log("No es igual")
}

// Escribe un ciclo For que recorra el arreglo y muestre cada uno de los elementos

for (let i = 0; i < array.length; i++) {
    console.log("Este es el elemento", array[i])
}

// Escribe un ciclo While que recorra el arreglo y muestre cada uno de los elementos

let i = 0

while (i < array.length) {
    console.log("Este es el elemento", array[i])
    i++
}

// Escribe un ciclo do while

let j = 0

do {    
    console.log("Este es el elemento", array[j])
    j++
} while (j < array.length);

// Escribe una funcion que reciba un parametro y lo muestre en consola

function showValue(value) {   
    console.log("Este es el valor", value)
}

showValue(123)

// Escribe una funcion que reciba dos parametros y los sume

function sumValues(a, b) {
    return a + b
}

console.log("Este es el resultado de la suma", sumValues(1, 2))

var cadena = 'esto es una cadena de texto'

cadena.toUpperCase()
cadena.toLowerCase()

var arrayNumbers = [5, 1, 3, 4, 2]

arrayNumbers.sort()

console.log("Este es el arreglo ordenado", arrayNumbers)