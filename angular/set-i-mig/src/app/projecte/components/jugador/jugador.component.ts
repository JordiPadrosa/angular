import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../model/entitats/implementacions/jugador/jugador';
import { JugadorService } from '../../model/services/jugador/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  constructor(private jugadorService:JugadorService) { }

  ngOnInit(): void {
  }

  getJugador(): Jugador{
    return this.jugadorService.getJugador();
  }

}
