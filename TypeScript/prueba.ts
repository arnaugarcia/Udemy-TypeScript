/**
 * Created by Arnau on 30/01/17.
 */
function holaMundo(nombre){
    return "Hola mundo, soy " + nombre;
}

let nombre = "Arnau García";

var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");

etiqueta.innerHTML = holaMundo(nombre);