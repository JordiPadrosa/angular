import { ICartaSetIMig } from "../../interficies/carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig {
    value!: number;
    visible!: boolean;

    constructor(num: number, pal: string, img: string){
        super(num,pal,img);
        this.setValue(num);
        this.visible = false;
    }

    public setValue(num: number){
        if(num <= 7) this.value = num;
        else this.value = 0.5;
    }
    girar():void{
        this.visible = !this.visible;
    }
}