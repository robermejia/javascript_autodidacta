// JSON: JavaScript Object Notation
let curso = {
    titulo: "Java",
    formato: "video",
    bloques: ["json","js"],
    inscribir: function(){
        console.log("HOLA");   
    }
}

// Mostrar el valor
console.log(curso.titulo);
console.log(curso.formato);
console.log(curso.bloques);
curso.inscribir();

// Otra sintaxis para mostrar el valor
console.log(curso["titulo"]);
console.log(curso["formato"]);
console.log(curso["bloques"]);
//  No necesitas curso["inscribir"] aquí, ya que no es un valor a mostrar, sino una función.

// Reasignar valores -  Corrección principal
curso.titulo = "php";
curso.formato = "mp3";
curso.bloques = ["html", "css"];
curso.inscribir = function (){ // Reemplaza la función, no intentes asignarle un valor a una llamada de función.
    console.log("MUNDO");  
};

// Mostrar los valores reasignados
console.log(curso.titulo);
console.log(curso.formato);
console.log(curso.bloques);
curso.inscribir();
