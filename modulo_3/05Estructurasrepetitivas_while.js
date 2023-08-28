// Permite realizar tareas de manera repetitiva.

var edwin = {
    nombre: 'Edwin',
    apellido: 'Pérez',
    edad: 25,
    sexo: 'M',
    peso: 70,
}

console.log(`Al inicio del año ${edwin.nombre} pesa ${edwin.peso}kg`)

const INCREMENTO_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const come_mucho = () => Math.random() < 0.3
const realiza_deporte = () => Math.random() < 0.7
const META = edwin.peso - 3
var dias = 0
while (edwin.peso > META) {
    debugger
        if (come_mucho()) {
            aumentarDePeso(edwin)
        }
        if (realiza_deporte()) {
            adelgazar(edwin)
        }
        dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${edwin.nombre} adelgazo ${edwin.peso}kg.`)
