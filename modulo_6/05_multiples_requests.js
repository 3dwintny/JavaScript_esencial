// Esta es la url de la api
const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const opts = { crossDomain: true }

const onPeopleResponse = (caracter) => console.log(`Hola yo soy ${caracter.name}`)

function obtenerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
// Estos son los metodos asincronicos, es dificil saber en que orden nos van a llegar los resultados
// Esate es el aincronismo de JavaScript en us maximo explendor
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)