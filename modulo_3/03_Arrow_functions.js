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
var candido =  {
    name: "Candido",
    age: 17,
    occupation: "Software Engineer",
    ingeniero: true,
    Cooking: false,
    Dancing: false,
    DJ: false,
    drone: false,
    music: false,
}
// Esto es una funcion 
const MAYORIA_DE_EDAD = 18
const esMayorDeEdad = function(persona) {
    return persona.age >= MAYORIA_DE_EDAD
}
// Esto tambien es una funcion 
const esMayorDeEdad2 = (persona) =>{
    return persona.age >= MAYORIA_DE_EDAD
}
// Esto tambien es una funcion, pero cuando solo tiene un parametro se le quita
// los parentesis
const esMayorDeEdad3 = persona =>{
    return persona.age >= MAYORIA_DE_EDAD
}
// Esto tambien es una funcion, pero hay que notar que solamente retorna algo
const esMayorDeEdad4 = persona => persona.age >= MAYORIA_DE_EDAD
// Esto tambien es una funcion, pero pasandole objetos que contiene un valor
const esMayorDeEdad5 = ({age}) => age >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({age}) => !esMayorDeEdad5({age})

function acceso (persona){
    if (!esMayorDeEdad5(persona)) {
        console.log("ACCESO DENEGADO")
    }
    else if (!esMenorDeEdad(persona))
    {
        console.log("ACCESSO AUTORIZADO")
    }
}

acceso(edwin)