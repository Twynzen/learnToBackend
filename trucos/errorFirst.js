//siempre que tengamos un callback el primer parámetro debería ser el error.
function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a)

        } catch (e) {
            callback(e)
        }
    }, 1000)
}

asincrona(function(err, dato) {
    if (err) {
        console.error('HAY ERROR');
        console.error(err);

        return false;

        // throw err NO FUNCIONA DE FORMA ASINCRONA

    }
    console.log('Todo salio bien wi');
})