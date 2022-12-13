import { ICarta } from "../carta/ICarta";

export interface IBaralla<T extends ICarta> {
    cartes: Array<T>;
    barrejar(): void;
}
