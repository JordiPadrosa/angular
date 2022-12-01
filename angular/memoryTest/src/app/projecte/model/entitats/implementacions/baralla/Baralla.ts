import { PAL } from "../../../utils/pals";
import { IBaralla } from "../../interficies/baralla/IBaralla";
import { Carta } from "../carta/Carta";

export class Baralla implements IBaralla {
    cartes: Array<Carta>;
    id: number;

    constructor(id: number) {
        this.id = id;
        this.cartes = new Array<Carta>();
        this.generar();
        this.barrejar();
    }

    generar():void {
        for(let i=0;i<4;i++){
            this.cartes.push(new Carta(this.id, PAL[i].imatge, "true"));
        }
        
    }

    barrejar():void {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];
          }
    }

}