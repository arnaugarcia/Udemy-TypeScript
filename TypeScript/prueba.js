/**
 * Created by Arnau on 30/01/17.
 */
function holaMundo(nombre) {
    return "Hola mundo, soy " + nombre;
}
//var nombre = "Arnau García";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
//Variables y tipos
var nombre = "Arnau";
var edad = 19;
var programador = true;
var langs = ["PHP", "Javascript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
// let y var
var a = 7;
var b = 1;
if (a === 7) {
    var a_1 = 4;
    var b = 12;
    console.log("Dentro del IF " + a_1 + " - " + b);
}
console.log("Fuera del IF " + a + " - " + b);
