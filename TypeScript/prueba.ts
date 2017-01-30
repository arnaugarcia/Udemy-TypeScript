/**
 * Created by Arnau on 30/01/17.
 */
function holaMundo(nombre){
    return "Hola mundo, soy " + nombre;
}

//var nombre = "Arnau García";

var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");

etiqueta.innerHTML = holaMundo(nombre);

//Variables y tipos
var nombre:string = "Arnau";

var edad:number = 19;

var programador:boolean = true;

var langs: Array<String> = ["PHP","Javascript","CSS"];

etiqueta.innerHTML = nombre + " - " + edad;


// let y var

var a = 7;
var b = 1;

if (a === 7){

    let a = 4;
    var b = 12;

    console.log("Dentro del IF " + a + " - " + b);
}
console.log("Fuera del IF " + a + " - " + b);
