/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

    // Escribo un comentario en una línea.

// 2. Escribe un comentario en varias líneas

    /* Escribo un
    comentario en
    varias líneas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    //String
    let cadenaDeTexto = "String" 

    // Numero
    let number = 84  

    let numero = 1.9

    //Booleano
    let isNew = true   
    let isOld = false

    //Undefined
    let undefinedObject = undefined    

    //Null
    let newObject = null        

    //Symbol
    let flag = Symbol("blue")     

    //BigInt
    let amount = BigInt(329412934712734917239)     
    let amount2 = 312849173298471937459n

// 4. Imprime por consola el valor de todas las variables

    console.log(cadenaDeTexto)

    console.log(number)
    console.log(numero)

    console.log(isNew)
    console.log(isOld)

    console.log(undefinedObject)

    console.log(newObject)

    console.log(flag)

    console.log(amount)
    console.log(amount2)


// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof cadenaDeTexto)

    console.log(typeof number)
    console.log(typeof numero)

    console.log(typeof isNew)
    console.log(typeof isOld)

    console.log(typeof undefinedObject)

    console.log(typeof newObject)

    console.log(typeof flag)

    console.log(typeof amount)
    console.log(typeof amount2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    //string
    cadenaDeTexto = "Otro texto"

    //number
    number = 22
    numero = 89.3

    //boolean
    isNew = false
    isOld = true

    //undefined
    undefinedObject = undefined

    //null
    newObject = null

    //Symbol
    flag = Symbol("red")

    //BigInt
    amount = BigInt(10000000000000000)
    amount2 = 8000000000000000000n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    cadenaDeTexto = BigInt(900001000)

    number = false
    numero = true

    isNew = undefined
    isOld = null

    undefinedObject = 93012910138494957n

    newObject = Symbol("yellow")

    flag = "Switzerland"

    amount = 909
    amount2 = 64321.10

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    //string
    const texto = "Hello, World!"

    //number
    const age = 22
    const money = 3000.10

    //boolean
    const isTruth = true
    const isLie = false

    //undefined
    const somethingIdk = undefined

    //null
    const someObject = null

    //symbol
    const color = Symbol("green")

    //bigInt
    const years = BigInt(14000010002090090900)
    const years2 = 8899999955555123n

// 9. A continuación, modifica los valores de las constantes

    //string
    texto = "Hello, Universe!"

    //number
    age = 80
    money = 9000.40

    //boolean
    isTruth = false
    isLie = true

    //undefined
    somethingIdk = undefined

    //null
    someObject = null

    //symbol
    color = Symbol("orange")

    //bigInt
    years = BigInt(50000000000000000000000)
    years2 = 80000000000000000001n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    // Las líneas de const del ejercicio 9 porque ya tenían un valor definido en el ejercicio 8?
    
    //string
    //texto = "Hello, Universe!" --> da error

    //number
    //age = 80 --> da error
    //money = 9000.40--> da error

    //boolean
    //isTruth = false --> da error
    //isLie = true --> da error

    //undefined
    //somethingIdk = undefined --> da error

    //null
    //someObject = null --> da error

    //symbol
    //color = Symbol("orange") --> da error

    //bigInt
    //years = BigInt(50000000000000000000000) --> da error
    //years2 = 80000000000000000001n --> da error