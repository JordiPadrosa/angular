import { Injectable } from '@angular/core';
import { Jugador } from '../../entitats/implementacions/jugador/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  jugador: Jugador = new Jugador("");
  constructor() { }

  getJugador(): Jugador {
    return this.jugador;
  }
}
