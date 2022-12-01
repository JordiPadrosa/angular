import { ICarta } from "../../interficies/carta/ICarta";
import { Baralla } from "../baralla/Baralla";

export class Carta implements ICarta{
    fila: number;
    img: string;
    visible: string;

    constructor(fila: number, img: string, visible: string) {
        this.fila = fila;
        this.img = img;
        this.visible = visible;
    }
} 