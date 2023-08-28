function Persona(name,lastname,altura){
    this.name = name;
    this.lastname = lastname;
    this.altura = altura;
}
// El prototipo es un objeto mas de javaScript
Persona.prototype.soyAlto = function(){
    return this.altura > 1.60;
}

var edwin = new Persona('Edwin', 'Mejia',1.61);
var vidalia = new Persona('Vidalia', 'Gomez',1.55);

console.log(edwin,vidalia);

console.log(edwin.soyAlto())