// Objeto   
var edwin = {
    name: 'Edwin',
    last_name: 'Mejia',
    age: 25,
    city: 'Quetzaltenango',
};
var eder = {
    name: 'Eder',
    last_name: 'Mejia',
    age: 25,
    city: 'Quetzaltenango',
};

function printObject(persona) {
    var {name} = persona //Es equivalente a var nombre = persona.name 
    console.log(name.toUpperCase());
}

printObject(edwin);