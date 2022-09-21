function callBroke() {
    broke()
}

function broke() {
    return 3 + z;
}

//prueba asincrona
// como se ejecuta en otro hilo no hay forma de detectar sus cambios
//Por eso necesita tener su propipo try catch con un callback
function errorAsyncrono(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Se rompio lo que esperabamos que se rompiera ASYNCRONO');
            //Con esto contamos por que se rompio
            // console.error(err)
            cb(err)
            console.error(err.message)


        }
    })
}



try {
    errorAsyncrono(function() {
        console.log('Error traido de asincrono');
    });
} catch (err) {
    console.error('Se rompio lo que esperabamos que se rompiera');
    //Con esto contamos por que se rompio
    // console.error(err)
    console.error(err.message)

}