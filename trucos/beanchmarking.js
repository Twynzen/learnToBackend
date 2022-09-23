//Así podemos ver cuanto es el tiempo de ejecución.

console.time()
let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000000; i++) {

    suma += 1;

}
console.timeEnd('bucle');


let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {

    suma2 += 1;

}
console.timeEnd('bucle 2');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}
console.time('asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    });