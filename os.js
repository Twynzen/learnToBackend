const os = require('os');
//Arquitectura del sistema
console.log(os.arch());
//Plataforma
console.log(os.platform());
//CPU del sistema
console.log(os.cpus());
//Cantidad de cores
console.log(os.cpus().length);
//Errores
console.log(os.constants);

//RAM
//Memoria en bites disponible
console.log(os.freemem());


const SIZE = 1024;

function kb(bytes) { return bytes / SIZE }

function mb(bytes) { return kb(bytes) / SIZE }

function gb(bytes) { return mb(bytes) / SIZE }
//Memoria en Kilobites disponible
console.log(kb(os.freemem()));
//Memoria en Megabites disponible
console.log(mb(os.freemem()));
//Memoria en Gigabites disponible
console.log(gb(os.freemem()));
//Memoria total
console.log(gb(os.totalmem()));

//ubicación
console.log(os.homedir());
//temporales
console.log(os.tmpdir());
//ver el host de la maquina para exportar
console.log(os.hostname());
//Interfaces de red activas
console.log(os.networkInterfaces());