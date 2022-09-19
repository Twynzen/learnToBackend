function iamAsynchronous(name, myCallback) {
    console.log('hi i am asynchronous');
    setTimeout(function() {
        console.log(name, 'now is asynchoronous');
        myCallback();
    }, 1000);
}

function adios(name, otherCallback) {
    setTimeout(function() {
        console.log("adio", name);
        otherCallback();

    }, 1000);
}

console.log("Start proccess");
iamAsynchronous('Daniel', function() {
    adios('Daniel', function() {
        console.log("End proccess");
    })
});