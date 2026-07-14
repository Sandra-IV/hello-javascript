/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let x = 4
let y = 2

console.log(x + y) // Suma

console.log(x - y) // Resta

console.log (x * y) // Multiplicación

console.log (x / y) // División

console.log (x % y) // Módulo

console.log (x ** y) // Exponente

x++
console.log(x) // Incremento

y--
console.log(y) // Decremento


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

let miVaina = 1
console.log(miVaina) // Creación de nueva variable

miVaina += x
console.log(miVaina) // Sumar y asignar

x -= y
console.log(x) // Restar y asignar

x *= y
console.log(x) // Multiplicación y asignar

x /= y
console.log(x) // División y asignar

x %= y
console.log(x) // Módulo y asignar

miVaina **= x
console.log(miVaina) // Exponente y asignar


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 8
let b = 20

console.log(a < b) // Menor que

console.log(a >= 8) // Menor o igual que

console.log(b == "20") // Igualdad por valor

console.log(b === 20) // Igualdad estricta

console.log(a != b) // Desigualdad por valor


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a > b) // Mayor que

console.log(a >= b) // Mayor o igual que

console.log(a == b) // Igualdad por valor

console.log(a === b) // Igualdad estricta

console.log (a !== 8) // Desigualdad estricta


// 5. Utiliza el operador lógico and

console.log(a > 9 && 8 < 10) // false

console.log (a < 11 && b > 3 && 90 == "90") // true


// 6. Utiliza el operador lógico or

console.log (a == 8 || 20 === "20") // true

console.log (a > 10 || 9 < 3 || 8 < 1) // false


// 7. Combina ambos operadores lógicos

console.log(10 > 5 && 70 < 4 || 20 == b) // true
console.log(10 > 5 || 70 < 4 && 20 == b) // true -- && se ejecuta primero antes que || da igual el orden

// 8. Añade alguna negación

console.log(80 != b && b == 20 || a === "8") // true

console.log (!(7 > 2 && b == 20) || a == "10") // false

console.log (!(7 > 2 && b == 20) || a == "8") // true

// 9. Utiliza el operador ternario

const isSunny = true
isSunny ? console.log("It is sunny today") : console.log("It is not sunny today")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let c = 10
let d = 5

console.log((c + 9) < 3 && d === "5" || 90 > 55 || !(5 === d)) // true

console.log((c + 9) < 3 && d === "5" || 90 < 55 || !(5 === d)) // false