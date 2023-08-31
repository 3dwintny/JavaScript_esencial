var edwin = {
    name: 'Edwin',
    lastname: 'Mejia',
    edad: 24
}
function esMayorDeEdad(persona){
    //Var es una variable global, let es una variable local, desde solo poder ser usada en un if, y const es una variable que no cambia su valor. 
    var mensaje 
    const MAYORIA_DE_EDAD = 24
    if(persona.edad > MAYORIA_DE_EDAD)
    {
        mensaje = 'Es mayor de edad'
    }
    else{
        mensaje = 'Es menosr de edad'
    }
    console.log(mensaje)
}

esMayorDeEdad(edwin)