const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const opts = { crossDomain: true }


function obtenerPersonaje (id) {
    // Resovle es que no ubo error, reject es cuanco encuentra un error
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        // ademas de la ur se pasa el opts y despues una funcion que retorna un promesa que si fue ejecutada
        $.get(url, opts,(data) => resolve(data))
        // Si la promesa no fue ejecutada, se ejecuta la funcion reject
        .fail(() => reject(id))
    })
    
}
// Ejecutamos la funcion
obtenerPersonaje(1)
    // Si es aceptada, nos devueble el nombre de la persona
   .then((personaje) => {
    console.log(`El personaje 1 es el ${personaje.name}`)
    // Despues de ser aceptada, podemos pedirle que nos mande a la segunda persona. 
    return obtenerPersonaje(2)
    })
    .then((personaje) => {
        console.log(`El personaje 2 es el ${personaje.name}`)
        return obtenerPersonaje(3)
        })
    .then((personaje) => {
        console.log(`El personaje 3 es el ${personaje.name}`)
        return obtenerPersonaje(4)
        })
    
    .then((personaje) => {
        console.log(`El personaje 4 es el ${personaje.name}`)
        return obtenerPersonaje(5)
        })
    .then((personaje) => {
        console.log(`El personaje 5 es el ${personaje.name}`)
        return obtenerPersonaje(6)
        })
    
    .then((personaje) => {
        console.log(`El personaje 6 es el ${personaje.name}`)
        return obtenerPersonaje(7)
        })
    .then((personaje) => {
        console.log(`El personaje 7 es el ${personaje.name}`)
        })
        
    // Sin embargo si no da, podemos notificar el error con el catch que es el reject
    .catch((id) => console.log(`Sucedio un error al obtener al personaje ${id}`))