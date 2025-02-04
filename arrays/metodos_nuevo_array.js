// ============================= Métodos de Array =====================
// ============== map() =================== 
// Genera un nuevo arraglo, luego de aplicar una modificación a 
// cada elemento del arreglo.

let numero = [1,2,3,4,5];
let numerocuadrado = numero.map(function(num){
    return num * num;
})
console.log(numero.join());
console.log(numerocuadrado);
console.log(numerocuadrado.join("-"));


// ================ filter() =================
// Crea un nuevo array del elemnto filtrado
let numero2 = [1,2,3,4,5];
let numeroFilter = numero.filter(function(num){
    return num === 2;
})
console.log(numeroFilter);
console.log(numeroFilter.join());
console.log(numero2);

// ================ reduce() =================
// No devuelve un nuevo array 
let numero3 = [1,2,3,4,5];
let numeroReduce = numero3.reduce(function(acc, valorActual){
    return acc + valorActual;
})
console.log(numeroReduce);
