import { IBaralla } from "../baralla/IBaralla";

export interface ITaula {
    baralles: Array<IBaralla>;
    generar():void;
}