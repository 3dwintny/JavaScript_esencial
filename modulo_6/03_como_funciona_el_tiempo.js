//console.log('A')
    //setTimeout(() => console.log('B'), 2000)
    //console.log('C')
    // Ejecuta esto pero, ese deeley que se presenta, tiene que esperarse hasta que el loop que esta en el for termine
    setTimeout( () => console.log('E'), 1000)
    // Termina de ejecutarse esta linea de codigo y empeiza a trabajar con lo que se quedo en el setTimeout
    for (var i = 0; i < 100000000000 ; i++) {

    }

