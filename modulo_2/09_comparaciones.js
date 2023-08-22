var x = 4, y = '4'
// Lleva a un mismo valor, y no compara si son del mismo tipo
console.log(x== y)
// Compara el tipo y valor
console.log(x===y)
// En esta parte vamos a comparar si los objetos pueden tomarse de la misma forma
// En este caso veremos que no, ya que javaSritp toma los objetos como diferentes.
var edwin = {
    nombre: 'Edwin',
    apellido: 'Mejia',
    edad: 25,
    peso: 70,
    altura: 1.80,
}
var otraPersona = {
    nombre: 'Edwin',
    apellido: 'Pérez',
    edad: 25,
    peso: 70,
    altura: 1.80,
}

console.log(edwin == otraPersona)

// En esta otra veremos una forma de que los objetos si sean lo mismo, ya que en 
// memoria si usan el mismo lugar. 

var edwin2 = {
    nombre: 'Edwin',
    apellido: 'Mejia',
    edad: 25,
    peso: 70,
    altura: 1.80,
}

var otraPersona2 = edwin2

console.log(edwin2 == otraPersona2)
// En esta parte vamos a comparar si los objetos pueden tomarse de la misma forma.

var edwin3 = {
    ...edwin2,
}

