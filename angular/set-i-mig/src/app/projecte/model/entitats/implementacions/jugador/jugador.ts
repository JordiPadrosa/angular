import { IJugador } from "../../interficies/jugador/IJugador";
import { CartaSetIMig } from "../carta/CartaSetIMig";

export class Jugador implements IJugador {
    nom: string;
    cartes: CartaSetIMig[] = new Array<CartaSetIMig>();

    constructor(nom: string){
        this.nom = nom;
    }
    contar(): number {
        let total: number = 0;
        this.cartes.forEach(
            carta => {total += carta.value}
        );
        return total;
    }

    agafar(carta: CartaSetIMig): void {
        this.cartes.push(carta);
    }

}