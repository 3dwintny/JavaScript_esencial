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

var ids = [1, 2, 3, 4, 5, 6,7]
// Recorremos los id con el map, creamos una funcion que me cree una promesa y la promesa es una funcion
// Que resibe como parametro el id y retorna una persona con el id
// var personajes = ids.map(function(id){return obtenerPersonaje(id)}) es equivalente a lo de abajo.
var promesas = ids.map((id) => obtenerPersonaje(id))
// invocamos en orden a las promesas 
Promise
    .all(promesas)
    .then((personajes) => console.log(personajes))
    .catch((id) => console.log(personaje.id))
// Con esto podemos hacer codigo mas legible y en paralelo