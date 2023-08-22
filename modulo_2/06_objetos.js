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
    console.log(persona.name.toUpperCase());
}
function printObjectForAtribute({last_name}) {
    console.log(last_name.toUpperCase());
}
// Pasamos el objeto completo y usamos los atributos a nuestra forma
printObject(edwin);
// Pasamos solo un atributo de un objeto, pueden ser mas o menos
printObjectForAtribute(eder);
// Usamos la misma funcion, pero pasando solamente el atributo que deceamos, 
// En esta parate estamos reutilizando el código de la función
printObjectForAtribute({last_name:'Candido'});
