let name = process.env.NAME || 'no hay nombre';
let phone = process.env.PHONE || 'no hay número';


// se utiliza process.env. para obtener variables externas al codigo, es decir las variables de entorno
console.log(name, phone);