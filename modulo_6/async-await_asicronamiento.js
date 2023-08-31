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
 async obternerPersonajes => {
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map((id) => obtenerPersonaje(id))

    try {
        // El await espera que se cumpla la primesa antes de pasar a la siguente
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } 
    catch (id) {
        console.error(`Error al obtener personajes: ${id}`)
    }
    
}

