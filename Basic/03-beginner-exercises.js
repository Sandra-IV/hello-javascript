/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

    //Escribo un comentario en una línea!

// 2. Escribe un comentario en varias líneas

    /* Escribo un
    comentario en
    varias líneas!*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    //string
    let texto = "Hello, World!"

    //number
    let age = 22
    let age2 = 22.4

    //boolean
    let isAnimal = false
    let isHuman = true

    //undefined
    let newThing = undefined

    //null
    let newObject = null

    //Symbol
    let warning = Symbol("red")

    //BigInt
    let amount = BigInt(13957834582348528)
    let amount2 = 90000000000000000n

// 4. Imprime por consola el valor de todas las variables

console.log(texto)
console.log(age)
console.log(age2)
console.log(isAnimal)
console.log(isHuman)
console.log(newThing)
console.log(newObject)
console.log(warning)
console.log(amount)
console.log(amount2)


// 5. Imprime por consola el tipo de todas las variables

console.log(typeof texto)
console.log(typeof age)
console.log(typeof isAnimal)
console.log(typeof isHuman)
console.log(typeof newThing)
console.log(typeof newObject)
console.log(typeof warning)
console.log(typeof amount)
console.log(typeof amount2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

texto = "What's up, World!"
age = 104
isAnimal = true
isHuman = false
newThing = undefined
newObject = null
warning = Symbol("orange")
amount = BigInt(1000000000000000000)
amount2 = 88888888888888888888888n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

texto = false
age = "500 dólares"
isAnimal = 48
isHuman = null
newThing = Symbol("yellow")
newObject = BigInt(90909090909090909090)
warning = 333333333333333333n
amount = undefined
amount2 = true

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

//string
const message = "Hola Mundo!"

//number
const year = 2003
const cents = 15.90

//boolean
const isNew = true
const isOld = false

//undefined
const newElement = undefined

//null
const newFactor = null

//symbol
const green = Symbol("correct")

//bigInt
const money = BigInt(200000000000000000)
const money2 = 519090867766676777677677767n

// 9. A continuación, modifica los valores de las constantes

message = "Hey JavaScript!"
year = 1945
cents = 20.88
isNew = false
isOld = true
newElement = undefined
newFactor = null
green = Symbol("incorrect")
money = BigInt(600000000000)
money2 = 1111111111111111111111111111111n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// message = "Hey JavaScript!" --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// year = 1945 --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// isNew = false --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// isOld = true --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// newElement = undefined --ERROR-- No llega a ejecutarse por lo anterior.
// newFactor = null --ERROR-- No llega a ejecutarse por lo anterior.
// green = Symbol("incorrect") --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// money = BigInt(600000000000) --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.
// money2 = 1111111111111111111111111111111n --ERROR-- Es una variable constante, por ende no se puede cambiar su valor.