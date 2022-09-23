//Libreria de manejo de imagenes
const sharp = require('sharp');

//Le pasamos el archivo que vamos a manejar y usamos alguna de sus funciones utiles
sharp('gatoDalle.png').resize(80).grayscale().toFile('resized.png');