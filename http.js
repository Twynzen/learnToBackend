//pedimos el modulo
const http = require('http');


function router(req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    switch (req.url) {
        //Así podemos enrutar correctamente , revisar cursos de express
        case '/hola':
            res.write('Hi how are you')
            res.end();
            break;
        default:
            res.write('Erro 404 no se que deseas pue')
            res.end();

    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })
    //     //Aquí iria la respuesta al usuario
    // res.write('Hola así uso http de node.js')

    // res.end();
}

http.createServer(router).listen(3000);

console.log("Escuchando http en el puerto 3000");

//Los puertos recomendados son 3000, 3001, 3002 o 8080 8081 etc..