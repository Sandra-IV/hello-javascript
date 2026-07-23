/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Sandra"

if (myName == "Sandra") {
    console.log("Welcome, Sandra")
} else {
    console.log("Wrong user")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Cooper"
let password = "123"

if (user == "Cooper" && password == "123") {
    console.log("Welcome, Cooper!")
} else {
    console.log("Incorrect credentials")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number > 0) {
    console.log("Positive")
} else if (number < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let voter = 12

if (voter >= 18) {
    console.log("Puede votar")
} else {
    console.log(`No puede votar, le faltan ${18 - voter} años más para hacerlo`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = 15

const message = edad >= 18 ? ("Es adulto") : ("Es menor")
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Noviembre"

if (mes == "Noviembre" || mes == "Octubre" || mes == "Diciembre") {
    console.log("Otoño")
} else if (mes == "Enero" || mes == "Febrero") {
    console.log("Invierno")
} else if (mes == "Marzo" || mes == "Abril" || mes == "Mayo") {
    console.log("Primavera")
} else if (mes == "Junio" || mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Verano")
} else {
    console.log("Wrong month")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

mes = 11

if (mes == 2) {
    console.log("Tiene 28 días o 29 en año bisiesto")
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("Tiene 30 días")
} else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("Tiene 31 días")
} else {
    console.log("Wrong month")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "DE"
let saludo

switch (idioma) {
    case "ES":
        saludo = "Hola!"
        break
    case "EN":
        saludo = "Hello!"
        break
    case "IT":
        saludo = "Ciao!"
        break
    case "FR":
        saludo = "Salut!"
        break
    case "DE":
        saludo = "Hallo!"
        break
    case "JP":
        saludo = "Konnichiwa!"
        break
    default:
        saludo = "Wrong language"
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = 12
let season

switch(mes) {
    case 1:
    case 2:
        season = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        season = "Primavera"
        break
    case 6:
    case 7:
    case 8:
    case 9:
        season = "Verano"
        break
    case 10:
    case 11:
    case 12:
        season = "Otoño"
        break
    default:
        season = "Mes incorrecto"
}

console.log (season)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes = 1
let days

switch(mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: 
    case 12:
        days = 31
        break
    case 2:
        days = "28 o 29 en año bisiesto"
        break
    default:
        days = "Wrong MONTH!"
}
console.log(days)