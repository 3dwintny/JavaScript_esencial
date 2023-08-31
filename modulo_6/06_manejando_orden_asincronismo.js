// Esta es la url de la api
const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = `people/:id`

const opts = { crossDomain: true }


function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts,function (caracter) {
        console.log(`Hola yo soy ${caracter.name}`)
        if(callback){
            callback()
        }
    })
}
// Estos son los metodos asincronicos, es dificil saber en que orden nos van a llegar los resultados
// Esate es el aincronismo de JavaScript en us maximo explendor
obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function (){
        obtenerPersonaje(3, function (){
            obtenerPersonaje(4, function (){
                obtenerPersonaje(5, function (){
                    obtenerPersonaje(6, function (){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})