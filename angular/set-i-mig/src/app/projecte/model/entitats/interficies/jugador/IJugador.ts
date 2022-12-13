import { CartaSetIMig } from "../../implementacions/carta/CartaSetIMig";

export interface IJugador {
    nom: string;
    cartes: CartaSetIMig[];

    agafar(carta: CartaSetIMig):void;
    contar():number;
}