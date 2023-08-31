function crearSaludo(finalDeFrase){
    // Funcion anonima
    return function(name){
        console.log(`Hola ${name} ${finalDeFrase}`);
    }
    
}
    const saludoArgentino = crearSaludo(`che`)
    const saludoMexicano = crearSaludo(`wey`)
    const saludoColombiano = crearSaludo(`amigo`)

saludoArgentino('Edwin')
saludoMexicano('Edwin')
saludoColombiano('Edwin')