function Persona(name,lastname){
    this.name = name;
    this.lastname = lastname;
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.name} ${this.lastname}`);
}

var edwin = new Persona('Edwin', 'Mejia');
var vidalia = new Persona('Vidalia', 'Gomez');

console.log(edwin,vidalia);

