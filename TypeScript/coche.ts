/**
 * Created by Arnau on 06/02/17.
 */
class Coche{

    private _color : string;
    private _modelo : string;
    private _velocidad : number = 0;


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(value: string) {
        this._modelo = value;
    }

    get velocidad(): number {
        return this._velocidad;
    }

    set velocidad(value: number) {
        this._velocidad = value;
    }

    acelerar(){
        this._velocidad++;
    }

    frenar(){
        this._velocidad--;
    }
}

var coche =  new Coche();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log(coche.velocidad);