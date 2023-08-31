var edwin = {
    name: 'Edwin',
    lastname: 'Mejia',
    edad: 24
}
function esMayorDeEdad(persona){
    if(persona.edad > 18)
    {
        var mensaje = 'Es mayor de edad'
    }
    else{
        var mensaje = 'Es menosr de edad'
    }
    console.log(mensaje)
}

esMayorDeEdad(edwin)