// const p = require('process');

process.on('beforeExit', () => {
    console.log('Antes de que acabe el proceso');
})

process.on('exit', () => {
    console.log('Se acabo el proceso');
    //SE ACABO EL EVENTLOOP NO SE VE NADA DESPUES DE ESTO
})

process.on('uncaughtException', (err, origen) => {
    console.log("Capturamos cuando salga un error no controlado");
    console.error(err);
})

// errorFalse();


// process.on('unhandledRejection')