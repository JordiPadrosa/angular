import { Valoracio } from "../implementacions/Valoracio";

export interface ICriteri {
    titol: string;
    valoracions: Array<Valoracio>;
    afegirCriteri(): void;
}