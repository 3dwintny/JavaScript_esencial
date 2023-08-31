const edwin = {
    name: 'Edwin',
    lastname: 'Mejia',

}

function saludar(saludo){
    console.log(`${saludo}, mi nombre es ${this.name}`)
}
// Una forma de usar esto
// const saludarAEdwin = saludar.bind(edwin, 'Hola')

// console.log(saludarAEdwin())
// Otra forma de usaar la funcion
// console.log(saludar.call(edwin, 'Hola'))
// Otra forma de usar la funcion

console.log(saludar.apply(edwin,['Hola']))