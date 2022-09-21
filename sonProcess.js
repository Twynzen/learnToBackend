//Puede ejecutar otro proceso en el sistema son los procesos hijos
//traemos la librerias que queremos usar
const { exec, spawn } = require('child_process');

// directamente podemos ejecutar el comando de consola que queramos CON EXEC
exec('node console.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})

//Con spawn similar a exec pero más completo por que podemos observar
// a detalle el proceso usado, extraer diferente tipode información de estos procesos
let proces = spawn('dir');
console.log(proces);
console.log(proces.pid);
console.log(proces.connected);

proces.stdout.on('data', function(dato) {
    console.log(proces.killed);
    console.log(dato.toString());
});
//Podemos incluso detectar cuando comienza y termina un proceso
proces.on('exit', function() {
    console.log('el proceso termino');
    console.log(proces.killed);

})