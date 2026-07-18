/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 8
let b = 4

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

a++
console.log(a)
b--
console.log(b)


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

let c = 5
let d = 10

console.log(c += b)
console.log(d -= a)
console.log(c *= a)
console.log(c /= a)
console.log(a %= b)
console.log(b **= a)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 < 10)
console.log(a === 0)
console.log(30 > b)
console.log(40 >= 40)
console.log(1 == "1")


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(10 < 5)
console.log(a !== 0)
console.log(b > 30)
console.log(39 >= 40)
console.log(1 != "1")

// 5. Utiliza el operador lógico and

console.log(10 > 5 && 1 == "1")

// 6. Utiliza el operador lógico or

console.log(10 < 5 || 6 === 6)

// 7. Combina ambos operadores lógicos

console.log((10 < 5 && 7 === 7) || 5 === "5")

// 8. Añade alguna negación

console.log(!(10 > 5 && 9 == "9") || 5 == "5")

// 9. Utiliza el operador ternario

const isNight = false

isNight ? console.log("Yes, it is nighttime") : console.log("No, it's not nighttime yet.")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(!(9 + 9 > 80 && 8 == "8") || 4 * 5 !== 20)