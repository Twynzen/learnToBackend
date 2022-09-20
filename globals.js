// Globals son normalmente funciones generales que vienen en node
//podemos crear variables globales aunque no es tan recomendado 
global.myVariable = 'hiiii'

console.log(myVariable);
// console.log(process);
let i = 0;
let intervalo = setInterval(function() {
    console.log('hi, how are you, good morning');
    if (i >= 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000)