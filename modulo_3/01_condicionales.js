var edwin =  {
    name: "Edwin",
    age: 25,
    occupation: "Software Engineer",
    ingeniero: true,
    Cooking: false,
    Dancing: false,
    DJ: false,
    drone: false,
    music: false,
}
function imprimirProfesiones(persona) {
    console.log(`Nombre: ${persona.name}`);
    if (persona.ingeniero) {
    console.log('Es ingeniero');
    }else{
        console.log('No es ingeniero');
    }
}
// Desafio, escribir funcion, imprimir si es mayor de edad
function imprimirEdad(persona) {
    if (persona.age >= 18) {
    console.log(`${persona.name} ,es mayor de edad`);
    }else{
        console.log(`${persona.name},no es mayor de edad`);
    }
}
imprimirProfesiones(edwin);
imprimirEdad(edwin);
