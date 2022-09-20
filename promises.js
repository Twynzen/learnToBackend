//A diferencia de los callbacks normales, una promesa devuelve la ejecución de una función utilizando el .then 
//el then es para las diferentes respuestas de el parametro resolve que se pasa dentro del mismo promise
// en caso de que no se ejecute un resolve y se vaya por un reject esto dará como resultado un error
//el error debe ser visualizado a travez de catch, que explicara más a detalle lo que ocurrio dentro de las promesa esperada

function hello(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name, 'helouda');
            resolve(name)
        }, 1000);
    });

}

function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("birubiru");
            resolve(name);
        }, 1000)
    })

}

function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("adio", name);
            resolve(name);

        }, 1000);
    })

}

console.log('start process');
hello('Daniel')
    .then(speak)
    .then(adios)
    .then((name) => {
        console.log('End Process');
    })
    .catch(error => {
        console.error('An erro has ocurred');
        console.error(error);
    })