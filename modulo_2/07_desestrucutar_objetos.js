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
    age: 19,
    city: 'Quetzaltenango',
};

function printObject(persona) {
    var {name} = persona //Es equivalente a var nombre = persona.name 
    console.log(name.toUpperCase());
}

printObject(edwin);

// Reto

function printObjectReto(persona) {
    var {name} = persona
    var {age} = persona
    console.log("Hola, me llamo "+name + " y engo "+age+" años");
}

printObjectReto(edwin);
printObjectReto(eder);