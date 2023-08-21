var nombre = 'Edwin';
// Esta funcion cambia el valor de la variable nombre
// Y no buscamos eso, solamente queremos imprimir en mayuscula
// Lo que tenemos en la variable nombre
function ImprimirNombreEnMayusculasNot() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}
// Esta es la manera correcta de hacerlo, para darle un mejor uso 
// al codigo y que cumplamos con el requerimiento
function ImprimirNombreEnMayusculas(name) {
    name = name.toUpperCase();
    console.log(name);
}
// Esta es otra manera correcta de hacerlo, JavaScript lo permite
function ImprimirNombreEnMayusculas(nombre) {
    // Existe nombre solamente de manera local
    nombre = nombre.toUpperCase();
    console.log(nombre);
    // Si quisieramos indicar que usemos la variable nombre, que esta
    // de manera global, no se puede acceder a la variable
    // podemos usar esto window.nombre = nombre;
}

ImprimirNombreEnMayusculas(nombre);