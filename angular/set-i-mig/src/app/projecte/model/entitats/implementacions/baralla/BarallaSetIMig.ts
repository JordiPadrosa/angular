import { PAL } from "src/app/projecte/utils/pals";
import { IBarallaSetIMig } from "../../interficies/baralla/IBarallaSetIMig";
import { ICarta } from "../../interficies/carta/ICarta";
import { ICartaSetIMig } from "../../interficies/carta/ICartaSetIMig";
import { Carta } from "../carta/Carta";
import { CartaSetIMig } from "../carta/CartaSetIMig";
import { Baralla } from "./Baralla";


export class BarallaSetIMig implements IBarallaSetIMig {
    cartes: Array<CartaSetIMig> = new Array<CartaSetIMig>();
    
    constructor() {
        this.generar();
        this.inicialitzarValor();
        console.log(this.cartes);
    }
    eliminar(carta: CartaSetIMig): void {
        this.cartes = this.cartes.filter(c => c!=carta);
    }
    barrejar(): void {
        throw new Error("Method not implemented.");
    }

    generar(): void {
        for(let j = 0; j<PAL.length;j++) {
            for(let i=1;i<13;i++) {
                this.cartes.push(new CartaSetIMig(i,PAL[j].pal,PAL[j].imatge));
            }
            this.eliminar8i9();
        }
    }

    private eliminar8i9(): void {
        this.cartes = this.cartes.filter(carta => carta.num!=8 && carta.num!=9)
    }


    public inicialitzarValor():void {
        
        for(let i=0;i<this.cartes.length;i++) {
            this.cartes[i].setValue(this.cartes[i].num);
            /* let carta:CartaSetIMig = this.cartes[i]  as unknown as CartaSetIMig;
            carta.setValue(carta.num); */
            //this.cartes[i].value = i;
        }
                        

    }
    
}