import { Injectable } from '@angular/core';
import { Baralla } from '../../entitats/implementacions/baralla/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla:Baralla = new Baralla(1);

  constructor() {

  }

  getBaralla():Baralla {
    return this.baralla;
  }
}