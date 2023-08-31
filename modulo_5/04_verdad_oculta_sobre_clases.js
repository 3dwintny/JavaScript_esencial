function heredaDe(PrototypeHijo, prototypePadres){
    var fn = function () {};
    fn.prototype = prototypePadres.prototype;
    PrototypeHijo.prototype = new fn();
    prototypePadres.prototype.constructor  = PrototypeHijo
}

function Persona(name, lastname,height){
    this.name = name;
    this.lastname = lastname;
    this.height = height;
}

Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.name} ${this.lastname}`);
}
Persona.prototype.soyAlto = function(){
    return this.height > 1.8;
}

function desarrollador(name, lastaname){
    this.name = name;
    this.lasta_name = lastaname;
}

heredaDe(desarrollador, Persona);