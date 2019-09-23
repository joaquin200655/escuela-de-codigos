
//variable
//SINTAXIS
//variable[nombre de variable] = [valor de la variable] [SI ES TEXTO "va entre comillas" SI ES NUMERO vasin comillas""]
var nombre = "joaquin";

var edad = 64;

var peso = 87;

console.log (nombre);

//concatenación
//error sumo las dos ultimas variables de tipo numerico
console.log(nombre + edad + peso);
//respeta las diferrencias de variables
console.log(nombre + edad , peso);
//coma para diferenciar las variables
console.log(nombre , edad , peso);

//secuencia de escape
// \t =espacio de tabulacion y \n nos da un enter ó salto de linea
console.log(nombre + "\t" , edad + "\n" , peso);

console.log("*************");
console.log("NOMBRE : " + nombre );
console.log("EDAD : " + edad);
console.log("PESO : "+ peso);
console.log("**************");

console.log("************ \n NOMBRE: " + nombre + "\n EDAD: " + edad +"\n PESO: " + peso + "\n ***********");


var pel1 = "Rey Leon";
var pel2= "Blanca Nieves";
var pel3= "Cenicienta";
var hor= "1:00   4:00   7:00";

console.log("********************************")
console.log("        ****CARTELERA****");
console.log(pel1 + "      " + hor);
console.log(pel2 + " " + hor);
console.log(pel3 + "    " + hor);
console.log("********************************")
