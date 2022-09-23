//Solo guardamos espacios de memoria
//Podemos trabajar los datos en su versión  más cruda
let bufferEmpty = Buffer.alloc(3);
let bufferWithData = Buffer.from([1, 4, 3]);
let bufferWithDataString = Buffer.from('hi how are you foo morning');


console.log(bufferEmpty);
console.log(bufferWithData);
console.log(bufferWithDataString);
console.log(bufferWithDataString.toString());

let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}
console.log(abc.toString());