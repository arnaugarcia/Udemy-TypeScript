/**
 * Created by Arnau on 06/02/17.
 */
var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this._velocidad = 0;
        this._color = "Blanco";
        if (modelo == null) {
            this._modelo = "BMW Generic";
        }
        else {
            this._modelo = modelo;
        }
        this._velocidad = 0;
    }
    Object.defineProperty(Coche.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "velocidad", {
        get: function () {
            return this._velocidad;
        },
        set: function (value) {
            this._velocidad = value;
        },
        enumerable: true,
        configurable: true
    });
    Coche.prototype.acelerar = function () {
        this._velocidad++;
    };
    Coche.prototype.frenar = function () {
        this._velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Tesla Model S");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log(coche.velocidad);
console.log("El modelo del coche es: " + coche.modelo);
