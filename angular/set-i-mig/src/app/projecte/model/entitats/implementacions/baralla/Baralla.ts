import { IBaralla } from "../../interficies/baralla/IBaralla";
import { ICarta } from "../../interficies/carta/ICarta";
import { ICartaSetIMig } from "../../interficies/carta/ICartaSetIMig";
import { Carta } from "../carta/Carta";
import { CartaSetIMig } from "../carta/CartaSetIMig";

export class Baralla implements IBaralla<Carta> {
    cartes: Array<Carta>;

    constructor() {
        this.cartes = new Array<Carta>();
        this.generar();
    }

    generar() {
        for(let i=1;i<13;i++) {
            this.cartes.push(new Carta(i,"porro","img.jpg"));
        }
    }

    barrejar(): void {
        throw new Error("Method not implemented.");
    }

}