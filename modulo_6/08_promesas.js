// Promesas que se incorporan en javaScript
// Pending Promises
// fullfilled Promise .then(val =>)
// rejected Promise .catch(err =>)

// Esta es la url de la api
const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const opts = { crossDomain: true }


function obtenerPersonaje (id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts,(data) => resolve(data))
        .fail(() => reject(id))
    })
    
}

obtenerPersonaje(1)
   .then((personaje) => console.log(`El personaje 1 es el ${personaje.name}`))
   .catch((id) => console.log(`Sucedio un error al obtener al personaje ${id}`))