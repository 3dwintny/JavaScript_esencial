// Esta es la url de la api
const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const opts = { crossDomain: true }


function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts,callback).fail(() => console.log(`No se pudo obtener el personaje ${id}`))
}
// Estos son los metodos asincronicos, es dificil saber en que orden nos van a llegar los resultados
// Esate es el aincronismo de JavaScript en us maximo explendor
obtenerPersonaje(1, function (personaje){
    console.log(`Hola, yo soy ${personaje.name}`)
    obtenerPersonaje(2, function (personaje){
        console.log(`Hola, yo soy ${personaje.name}`)
        obtenerPersonaje(3, function (personaje){
            console.log(`Hola, yo soy ${personaje.name}`)
            obtenerPersonaje(4, function (personaje){
                console.log(`Hola, yo soy ${personaje.name}`)
                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)
                    obtenerPersonaje(6, function (personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)
                        obtenerPersonaje(7,(personaje) =>
                            console.log(`Hola, yo soy ${personaje.name}`)
                        )
                    })
                })
            })
        })
    })
})