const fs = require('fs');
const stream = require('stream');
//Para trabajar con herencia automatico
const util = require('util')

//SIRVE MUCHO PARA LA TRANSMISIÓN DE DATOS GRANDESEN PEQUEÑAS CANTIDADES

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.on('data', function(chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

//Así se crea una salida estandar del sistema
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

//Crea un stream doble
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this)
}
//Les decimos que por herencia Mayus traiga lo que necesite de Transform
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);