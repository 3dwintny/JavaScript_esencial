function Persona(name,lastname,altura){
    this.name = name;
    this.lastname = lastname;
    this.altura = altura;
}
// Con arrow function no podemos usar thies, es importante que uses la funcion de manera tradicional
Persona.prototype.soyAlto = Persona.altura > 1.60;


var edwin = new Persona('Edwin', 'Mejia',1.61);
var vidalia = new Persona('Vidalia', 'Gomez',1.55);
// Aqui no funciona. 
console.log(edwin,vidalia);

console.log(edwin.soyAlto())