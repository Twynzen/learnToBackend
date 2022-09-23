const bcrypt = require('bcrypt');

const password = '123Segura';

//Encriptamos contraseña, recomendable asyncrono para no bloquear el flujo de eventos
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);
    //Con compare verificamos si esa password puede generar ese hash
    bcrypt.compare(password, hash, function(err, res) {
        // console.log(err);
        console.log(res);
    })
})