import { ICarta } from "../carta/ICarta";

export interface IBaralla{
    cartes: Array<ICarta>;
    id: number;
    generar(): void;
    barrejar(): void;
}