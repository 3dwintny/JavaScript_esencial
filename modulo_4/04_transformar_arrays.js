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
// Funcion de cambiar la altura de las personas, pero usando el mismo objeto
const cambio_altura = personas => personas.altura*100;
// Esta puede ser la creacion de un nuevo array de personas con la altura cambiada, es uno muy distinto al original
const cambio_altura2 = personas =>{
    return {
        ...personas,
        altura: personas.altura*100,
    };
}
// la misma funcion anterior pero con arrow funcion, recordar que es equivalente.
const cambio_altura_arrow = personas =>({
        ...personas,
        altura: personas.altura*100,
    }
)
// Ejecutar la funcion cambio_altura por cada persona, y retorna a la persona
// Genera un nuevo array de personas con la altura cambiada
var pasar_altura_a_sentimetros = personas.map(cambio_altura_arrow);

console.log(pasar_altura_a_sentimetros,"Son iguales True(verdadero) | False(falso)?",
    personas === pasar_altura_a_sentimetros);