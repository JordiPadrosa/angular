import { Injectable } from '@angular/core';
import { Taula } from '../../entitats/implementacions/taula/Taula';

@Injectable({
  providedIn: 'root'
})
export class TaulaService {
  taula:Taula = new Taula();
  contador: number = 0;

  constructor() {

  }

  getTaula():Taula {
    return this.taula;
  }
  getContador():number {return this.contador;}
  sumContador():void {this.contador++;}
}