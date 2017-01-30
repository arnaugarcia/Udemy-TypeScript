/**
 * Created by Arnau on 30/01/17.
 */
function holaMundo(nombre) {
    return "Hola mundo, soy " + nombre;
}
var nombre = "Arnau García";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
