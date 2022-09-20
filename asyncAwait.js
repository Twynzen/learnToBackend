async function hello(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name, 'helouda');
            resolve(name)
        }, 1000);
    });

}

async function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("birubiru");
            resolve(name);
        }, 1000)
    })

}

async function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("adio", name);
            resolve(name);

        }, 1000);
    })

}

async function main() {
    let name = await hello('Daniel');
    await speak();
    await adios(name);
}
main();