var contador = 0 
const llueve = () => Math.random() < 0.15

do {
    contador++
} while (!llueve())

console.log(`fui a ver que llueve ${contador} veces`)