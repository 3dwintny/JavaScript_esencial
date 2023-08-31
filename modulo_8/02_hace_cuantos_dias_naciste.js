function diasEntreFechas(fecha1,fecha2){
    const unDia = 1000 * 60 * 60 * 24
        // abs nos da un numero absoluto en milisegudnos
    const diferencia = Math.abs(fecha1 -fecha2) 

    return Math.floor(diferencia / unDia)

}

const hoy = new Date()
const nacimiento = new Date(1998,9,13)



console.log(diasEntreFechas(hoy,nacimiento) /365)