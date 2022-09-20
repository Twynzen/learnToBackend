//traemos el modulo filesystem que permite acceder a archivos de nuestro sistema
// es recomendado siempre usar la forma asincrona con este tipo de funciones
//se encesita convertir el data en to string para que no devuelva un buffer
const fs = require('fs');

function read(route, cb) {
    fs.readFile(route, (err, data) => {
        cb(data.toString());
    })
}

function write(route, content, cb) {
    fs.writeFile(route, content, function(err) {
        if (err) {
            console.error('pos error', err);
        } else {
            console.log('Se escribio correctamente');
        }

    })
}

function eliminate(route, cb) {
    fs.unlink(route, cb);
}
// write(__dirname + '/archivo1.txt', 'Hola nuevo texto soy yo how good morning how are you', console.log)
// read(__dirname + '/archivo.txt', console.log)
eliminate(__dirname + '/archivo1.txt', console.log);