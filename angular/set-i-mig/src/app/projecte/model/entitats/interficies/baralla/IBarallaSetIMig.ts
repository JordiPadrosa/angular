import { CartaSetIMig } from "../../implementacions/carta/CartaSetIMig";
import { ICartaSetIMig } from "../carta/ICartaSetIMig";
import { IBaralla } from "./IBaralla";

export interface IBarallaSetIMig extends IBaralla<ICartaSetIMig> {
    eliminar(carta: CartaSetIMig):void;
}