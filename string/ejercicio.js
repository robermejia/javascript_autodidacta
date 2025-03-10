let listaNombres = ["Roberto", "Agustín","Mejía","Collazoas"];
let nombreIngresado = prompt("Ingrese su nombre");
let buscar = listaNombres.includes(nombreIngresado);
alert(
    buscar?"Sí se encuentra":"No se encuentra"
);
