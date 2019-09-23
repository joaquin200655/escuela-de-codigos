//PROBAR QUE CARGUE JS

console.log("hola mundo");
//PROMT INTERACTUA  EN LA PAGUINA
//palabra reservada "prompt"
// prompt("Dime tu nombre","ingresa tu edad");

// var nombre = prompt("Dime tu nombre","ingresa tu nombre");
// console.log(nombre);
//concatenacion de archivos; alfabetico y funcion var
// console.log("Nombre ----->" + nombre);

//SINTAXIS PARA FUNCIONES Y EVENTOS
//palabra reservada "function" + nombre del evento + parentesis + llaves

function Ingresar() {
    console.log("Saludar");
    var nombre = prompt("Dime tu nombre","ingresa tu nombre");
    var edad = prompt("Dime tu edad","ingresa tu edad");
    // console.log("Nombre " + nombre);
    // console.log("Edad " + edad);
    // console.log("<------------->");
    document.write("Nombre " + nombre);
    document.write("Edad " + edad);
    document.write("<------------->");  
}
function Suma() {
    var n1=prompt("Dime el primer numero","numero");
    var n2=prompt("Dime el segundo numero","numero");
 
    var suma=parseInt(n1)+parseInt(n2);
    document.write(suma);
}
function Resta() {
    var n1=prompt("Dime el primer numero","numero");
    var n2=prompt("Dime el segundo numero","numero");
 
    var resta=parseInt(n1) - parseInt(n2);
    document.write(resta);
}
function Por() {
    var n1=prompt("Dime el primer numero","numero");
    var n2=prompt("Dime el segundo numero","numero");
 
    var mul=parseInt(n1) * parseInt(n2);
    document.write(mul);
}
function Div() {
    var n1=prompt("Dime el primer numero","numero");
    var n2=prompt("Dime el segundo numero","numero");
 
    var div=parseInt(n1) / parseInt(n2);
    document.write(div);
}
