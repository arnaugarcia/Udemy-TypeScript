/**
 * Created by Arnau on 07/02/17.
 */
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

