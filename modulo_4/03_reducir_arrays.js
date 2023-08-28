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

const res = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
} , 0)

console.log(res);