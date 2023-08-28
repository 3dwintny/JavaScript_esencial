// Permite realizar tareas de manera repetitiva.

var edwin = {
    nombre: 'Edwin',
    apellido: 'Pérez',
    edad: 25,
    sexo: 'M',
    peso: 70,
}

console.log(`Al inicio del año ${edwin.nombre} pesa ${edwin.peso}kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (let i = 0; i < 365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        // Aumenta de peso
        aumentarDePeso(edwin)
    }
    else if (random < 0.5) {
        // Adelgaza
        adelgazar(edwin)
    }
}

console.log(`Al final del año ${edwin.nombre} pesa ${edwin.peso.toFixed(1)}kg`)