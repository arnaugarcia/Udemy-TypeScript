/**
 * Created by Arnau on 06/02/17.
 */
interface CocheBase{
    modelo:string;
    velocidad:number;
}

class Coche implements CocheBase{

    private _color : string;
    private _modelo : string ;
    private _velocidad : number = 0;

    constructor(modelo:any = null) {
        this._color = "Blanco";
        if (modelo == null){
            this._modelo = "BMW Generic";
        }else{
            this._modelo = modelo;
        }
        this._velocidad = 0;
    }

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

var coche =  new Coche("Tesla Model S");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log(coche.velocidad);
console.log("El modelo del coche es: " + coche.modelo);