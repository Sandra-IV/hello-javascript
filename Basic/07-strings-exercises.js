/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let myName = "Cooper"
let saludo = "Hola, " + myName + "!"

console.log(saludo)

// 2. Muestra la longitud de una cadena de texto

console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string

console.log(saludo[0])
console.log(saludo[12])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Este es
mi mensaje en
varias líneas.`
console.log(message)

// 6. Interpola el valor de una variable en un string

let name = "Max"
let email = "maxcampfield@gmail.com"
console.log(`Hola ${name}! Este es tu correo: ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(saludo.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.includes("Cooper"))
console.log(saludo.includes("Amarillo"))

// 9. Comprueba si dos strings son iguales

console.log(myName === name)
console.log(saludo === message)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length === message.length)
console.log(myName.length === name.length)