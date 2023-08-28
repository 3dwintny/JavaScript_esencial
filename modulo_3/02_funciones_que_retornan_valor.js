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

function imprimirEdad(persona) {
    if (persona.age >= 18) {
    console.log(`${persona.name} ,es mayor de edad`);
    }else{
        console.log(`${persona.name},no es mayor de edad`);
    }
}

const MAYORIAEDAD = 18

function esMayorDeEdad(persona) {   
    return persona.age >= MAYORIAEDAD;
}

console.log(esMayorDeEdad(edwin))