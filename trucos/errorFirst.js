//Prueba de  que es necesario probar siempre posibles errores con callbacks con un try catch
function asincrona() {
    setInterval(function() {
        try {
            let a = 3 + z;
            callback(null, a)

        } catch (error) {
            callback(error, null)
        }
    })
}