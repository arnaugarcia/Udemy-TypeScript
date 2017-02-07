var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Arnau on 07/02/17.
 */
var Programa = (function () {
    function Programa() {
    }
    Object.defineProperty(Programa.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Programa.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    return Programa;
}());
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(EditorVideo.prototype, "timeline", {
        get: function () {
            return this._timeline;
        },
        set: function (value) {
            this._timeline = value;
        },
        enumerable: true,
        configurable: true
    });
    EditorVideo.prototype.allData = function () {
        return "Nombre: " + this.nombre + " Version: " + this.version + " Timeline " + this.timeline;
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.version = 1.0;
editor.nombre = "Movie Maker";
editor.timeline = 100;
console.log(editor.allData());
//Logica del programa
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.nombre = nombre;
    programa.version = 1.0;
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].nombre;
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
