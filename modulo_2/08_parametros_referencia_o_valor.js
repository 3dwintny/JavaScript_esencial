var vidalia = {
    name: 'vidalia',
    last_name: 'Gomez',
    age: 22,
    city: 'Quetzlatengango'
}
var vidalia2 = {
    name: 'vidalia',
    last_name: 'Gomez',
    age: 22,
    city: 'Quetzlatengango'
}
// Esta funcion resibe como parametro el objeto y lo trata como referencia o valor
function edad(persona) {
    persona.age += 1;
    console.log(persona.age)
}
    edad(vidalia);

    console.log(vidalia.age);
// Esta funcion no deberia cambiar el valor de la variable, ya que se pasa la variable
// Que esta dentro de el objeto
function edad2(edad) {
    edad += 1;
    console.log(edad)
}
    edad(vidalia2.age);
    console.log(vidalia2.age);

// Funcion que cambie el objeto
function cambiarObjeto(persona) {
    return {
        ...persona,
        age: persona.age + 5,
    }
}
var Vidalia_con_mas_edad =     cambiarObjeto(vidalia);