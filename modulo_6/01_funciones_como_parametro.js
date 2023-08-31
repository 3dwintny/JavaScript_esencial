class Persona {
    constructor(name, lastname, height){
        this.name = name;
        this.lastname = lastname;
        this.height = height;
    }

    saludar(fn){
        // var name = this.name
        // var lastname = this.lastname
        // Es equivalente a lo de abajo
        var {name, lastname} = this;
        console.log(`Hola soy ${name} ${lastname}`);
        if(fn){
            // El parametro de si es Dev, se ignora o no se manda nada. Al momento de ingresar abajo
            // ingresa como nodifine y lo toma como false 
            fn(name,lastname);
        }
    }
    soyAlto(){
        return this.height > 1.8;
    }
}

class desarrollador extends Persona{
    constructor(name, lastname, height){
        super(name, lastname, height)
    }
    saludar(fn){
        // var name = this.name
        // var lastname = this.lastname
        // Es equivalente a lo de abajo
        var {name, lastname} = this;
        console.log(`Hola soy ${name} ${lastname}, soy desarrollador`);
        if(fn){
            fn(name,lastname,true);
        }
    }
}
const juan = new Persona('Juan', 'Pérez', 1.8);
const jose = new desarrollador('Jose', 'Pérez', 1.8);


function responderSaludo(name, lastname,esDev){
    console.log(`Buen dia ${name} ${lastname}`);

    if (esDev){
        console.log('Nos sabia que eras desarrollador');
    }
}
juan.saludar(responderSaludo());
jose.saludar(responderSaludo())
