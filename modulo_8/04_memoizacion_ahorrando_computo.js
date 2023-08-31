function factorial(n){
    // Si no existe, crea a cache y genera el resultado
    if(!this.cache){
        this.cache = {}
    }
    // Si ya existe en cache, lo retorna. Esto nos ayuda a ahorrarnos vastante memoria.
    if(this.cache){
        return this.cache[n]
    }
    if (n===1){
        return 1
    }

    this.cache[n] =  n * factorial(n-1)
    return this.cache[n]
}

console.log(factorial(6))
