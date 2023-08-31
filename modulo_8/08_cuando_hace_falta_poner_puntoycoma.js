// Es algo opcional a excepcion de algunos casos

// Es inecesario despues de las funciones, o un for 
// Donde puede usarse 
console.log("Hola mi nombre es Edwin");
// Cuando se inica un array
[1,2,3].forEach(n => console.log(n+2))

// otra forma en la que si es necesario

const name = 'Edwin'
console.log('Hola mi nombre es Edwin ');
// Es necesario el punto y coma 
`${name} es un desarrollador`


function caclcularDoble(number){
    // No debemos escribir un return donde dejemos un salto de linea por que asimila como si fuera un punto y coma 
    return { original : number, doble: number * 2}
}