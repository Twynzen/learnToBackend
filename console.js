//Veamos otros tipos de consola

//Nos permite ver algo
console.log("Algo");

//igual a log pero es para informar
console.info("Algo info");

//Para ver errores
console.error();

//Para colocar advertencias 
console.warn();

//Podemos ver de forma eficaz los datos
var tabla = [{
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'x'
    }
]
console.table(tabla);

//Agrupar logs de información segun grupo
console.group('Inicio de grupo');
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.groupEnd('Fin de grupo');

//ejemplo de funciones
function f1() {
    console.group('Inicio de grupo fn1');
    console.log('DEL GRUPO 1');
    f2();
    console.groupEnd('Fin de grupo fn1');
}

function f2() {
    console.group('Inicio de grupo fn2');
    console.log('DEL GRUPO 2');
    console.groupEnd('Fin de grupo fn2');
}
f1();

//Para contar pues
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')