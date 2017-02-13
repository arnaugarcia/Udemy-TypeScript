/**
 * Created by Arnau on 07/02/17.
 */
module Tienda{
    export class Ropa{
        constructor (public titulo:string){
            alert("Tienda de ropa" + titulo);
        }
    }
    export class Informatica{
        constructor(public titulo:string){
            alert("Tienda de tecnología: " + titulo)
        }
    }
}

import informatica = Tienda.Informatica;

let cargarInformatica = new informatica("NeoByte");

function arranque(lanzar: string){
        return function(target: Function){
            target.prototype.lanzamiento = function(): void{
                alert(lanzar);
            }
        }
}

@arranque("Comienzo del programa");
class Programa{
    private _nombre: string;
    private _version: number;

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get version(): number {
        return this._version;
    }

    set version(value: number) {
        this._version = value;
    }
}

var programa = new Programa();

programa.lanzamiento();

class EditorVideo extends Programa{
    private _timeline:number;

    get timeline(): number {
        return this._timeline;
    }

    set timeline(value: number) {
        this._timeline = value;
    }

    allData(): string{
        return "Nombre: " + this.nombre + " Version: " + this.version + " Timeline " + this.timeline;
    }
}

var editor = new EditorVideo();
editor.version=1.0;
editor.nombre="Movie Maker";
editor.timeline=100;
console.log(editor.allData());

//Logica del programa

var programas:Array<Programa> = [];

function guardar(){
    var nombre = (<HTMLImageElement>document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.nombre = nombre;
    programa.version = 1.0;
    programas.push(programa);
    var list = "";
    for (var i = 0; i<programas.length; i++){
        list = list+"<li>"+programas[i].nombre;
    }

    var listado = <HTMLInputElement> document.getElementById("listado");
    listado.innerHTML = list;
}