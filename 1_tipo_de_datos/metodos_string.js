//=================== VARIABLES A USAR ======================
let cadena = "Cadena de prueba"
let cadena2 = "Cadena de prueba2"
let frase = "Hola Mundo con JavaScript";
let frase2 = "JavaScript, Java, Python";
//=================== PROPIEDAD DE STRING ======================
let logitud = frase.length;
console.log(logitud);
//=================== MÉTODOS DE STRING ======================
// slice()
let fragmento = frase.slice(0,4)
console.log(fragmento);
// split()
let lista = frase2.split(",");
console.log(lista);
// subspr()
let subcadena = frase.substr(0,4);
console.log(subcadena);
// toUpperCase()
let mayus = frase.toUpperCase();
console.log(mayus);
// toLowerCase()
let minus = frase.toLowerCase();
console.log(minus);
// concat()
let concatenar = cadena.concat(cadena2)
console.log(concatenar);
//indeOf()
let indice = frase2.indexOf("Java");
console.log(indice);
// include()
let incluye = frase.includes("Hol");
console.log(incluye);
