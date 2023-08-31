class Persona {
    constructor(name, lastname, height){
        this.name = name;
        this.lastname = lastname;
        this.height = height;
    }

    saludar(){
        console.log(`Hola soy ${this.name} ${this.lastname}`);
    }
    soyAlto(){
        return this.height > 1.8;
    }
}

class desarrollador extends Persona{
    constructor(name, lastname, height){
        super(name, lastname, height)
    }
    saludar(){
        console.log(`Hola soy ${this.name} ${this.lastname}, soy desarrollador`);
    }
}

const juan = new Persona('Juan', 'Pérez', 1.8);
const jose = new desarrollador('Jose', 'Pérez', 1.8);


juan.saludar();
jose.saludar();