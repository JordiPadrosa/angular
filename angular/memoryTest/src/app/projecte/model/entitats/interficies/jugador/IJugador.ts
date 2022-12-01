import { Carta } from "../../implementacions/carta/Carta";

export interface IJugador {
    nom: string;
    cartes: Carta[];
    agafar(carta: Carta):void;
}