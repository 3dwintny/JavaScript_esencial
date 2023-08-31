const edwin = {
    name: 'Edwin',
    lastname: 'Mejia',
    age: 24, 
}
// const cumpleanios = persona => persona.edad++
const cumpleaniosInmutable = persona => ({
    // Crea un nuevo objeto con nueva informacion
    ...persona,
     age : persona.age + 1
})
const edwin25 = cumpleaniosInmutable(edwin)
console.log(edwin25)