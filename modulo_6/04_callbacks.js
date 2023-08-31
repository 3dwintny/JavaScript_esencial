const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
const opts = { crossDomain: true }
// Esta puede ser una forma 
// $.get(lukeUrl, opts, (luke) => {
//     console.log(`Hola yo soy ${luke.name}`)
// })
// Esta es otra forma de hacerlo, aqui separamos funcion y solo la pasamos como parametro

const onPeopleResponse = (caracter) => console.log(`Hola yo soy ${caracter.name}`)

$.get(lukeUrl, opts, onPeopleResponse)