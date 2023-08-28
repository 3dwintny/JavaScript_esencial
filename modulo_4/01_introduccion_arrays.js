// Podemos mesclar cosas dentro de un array, numeros, strings, objetos, etc.

var vyky = {
    nombre: 'Viktor',
    apellido: 'Yakovlev',
    edad: 25,
    sexo: 'M',
    altura: 1.70,
}

var edwin = {
    nombre: 'Edwin',
    apellido: 'Garcia',
    edad: 25,
    sexo: 'M',
    altura: 1.60,
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
    altura: 1.55,
}

var personas = [vyky, edwin, vidalia, josue];

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`);
}

