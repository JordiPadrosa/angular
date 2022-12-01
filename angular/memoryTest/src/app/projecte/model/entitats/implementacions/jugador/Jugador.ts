import { IJugador } from "../../interficies/jugador/IJugador";
import { Carta } from "../carta/Carta";

export class Jugador implements IJugador {
    nom: string;
    cartes: Carta[] = new Array<Carta>();

    constructor(nom: string){
        this.nom = nom;
    }

    agafar(carta: Carta): void {
        this.cartes.push(carta);
    }

}