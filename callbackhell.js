function iamAsynchronous(name, myCallback) {
    console.log('hi i am asynchronous');
    setTimeout(function() {
        console.log(name, 'now is asynchoronous');
        myCallback();
    }, 1000);
}

function speak(callbackSpeak) {
    setTimeout(function() {
        console.log("birubiru");
        callbackSpeak();
    })
}

function adios(name, otherCallback) {
    setTimeout(function() {
        console.log("adio", name);
        otherCallback();

    }, 1000);
}

function conversation(name, times, callback) {
    //Lo ideal es ser recursivo llamando su respectiva función
    if (times > 0) {
        speak(function() {
            conversation(name, --times, callback);
        })
    } else {
        callback(function() {
            adios(name, callback)
        });
    }

}

console.log("Start proccess");
speak(function(name) {
    conversation(name, 4, function() {
        console.log("End proccess");

    });
})

// iamAsynchronous('Daniel', function() {
//     //ESTO NO DE BE HACERSE POR QUE LO IDEAL ES TENER SOLO UNA FUNCIÓN PARA CADA COSA NO REPETIR INECESARIAMENTE CODIGO
//     speak(function() {
//         speak(function() {
//             speak(function() {
//                 adios('Daniel', function() {
//                     console.log("End proccess");
//                 })
//             })
//         })
//     })

// });