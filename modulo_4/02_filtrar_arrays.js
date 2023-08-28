// Podemos mesclar cosas dentro de un array, numeros, strings, objetos, etc.

var vyky = {
    nombre: 'Viktor',
    apellido: 'Yakovlev',
    edad: 25,
    sexo: 'M',
    altura: 1.80,
}

var edwin = {
    nombre: 'Edwin',
    apellido: 'Garcia',
    edad: 25,
    sexo: 'M',
    altura: 1.71,
}

var vidalia={
    nombre: 'Vidalia',
    apellido: 'Garcia',
    edad: 25,
    sexo: 'M',
    altura: 1.40,
}
var josue = {   
    nombre: 'Josue',
    apellido: 'Garcia',
    edad: 25,
    sexo: 'M',
    altura: 1.75,
}
// Array de objetos
var personas = [vyky, edwin, vidalia, josue];
// funcion para verificar si un persona es alta
const esAlta = (persona) => persona.altura > 1.70;
const esBaja = (persona) => persona.altura < 1.70;
// filter, se encarga de itererar los objetos que cumplan con la condicion
// var personasAltas = personas.filter(esAlta)
// otra forma de hacerla es esta
var personasAltas = personas.filter(persona => persona.altura > 1.70);
var personasBajas = personas.filter(esBaja)

// Aunque esta funcion es buena, es importante tener una funcion aninima para mejorar la integridad de los datos
// Teneer en cuenta que esto no es regla, es mejor tener funciones que se reutilizen y que el codigo que se escribe
// sea legible.
console.log("Altas");
console.log(personasAltas);
console.log("Bajas");
console.log(personasBajas);