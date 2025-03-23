// ===================== Spread ========================
// ============= Aplicando en arreglos ==============
let arreglo = [1,2,3,4,5];
console.log(arreglo);

// Sintaxis de expasión
let arreglo2 = [1,2,3,4,5];
console.log(... arreglo2);
// ====== Aplicando en otro tipo de datos (iterables) ======
// Iterable: Todo objeto que puede ser descompuesto.
let nombre = "Roberto";
console.log(nombre);
console.log(...nombre);

// ======================= REST parameters ====================
// Serian lo contrario a Spread ya que junta los parametros.
// Se usa solo en funciones
function test(...num){
    // El objeto arguments devuelve un objeto no devuelve un array como 
    // los rest parameters
    console.log(arguments);
    console.log(num);
}
test(1,2);
// con otros parametros
function test2(nombre, ...nums){
    // El objeto arguments devuelve un objeto no devuelve un array como 
    // los rest parameters
    console.log(arguments);
    console.log(nombre,nums);
}
test2("Roberto", 1,2,3,4,5,6);









