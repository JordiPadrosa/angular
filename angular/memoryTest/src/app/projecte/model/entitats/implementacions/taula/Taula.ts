import { ITaula } from "../../interficies/taula/ITaula";
import { Baralla } from "../baralla/Baralla";

export class Taula implements ITaula {
    baralles: Array<Baralla>;

    constructor() {
        this.baralles = new Array<Baralla>();
        this.generar();
    }

    generar():void {
        for(let i=0;i<4;i++) {
            this.baralles.push(new Baralla(i));
        }
    }
}