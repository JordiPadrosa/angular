import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../model/entitats/implementacions/carta/CartaSetIMig';
import { BarallaService } from '../../model/services/baralla/baralla.service';
import { JugadorService } from '../../model/services/jugador/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() carta!: CartaSetIMig;

  constructor(private barallaService: BarallaService, private	jugadorService:JugadorService) { }

  ngOnInit(): void {
    if(this.carta != undefined) console.log(this.carta);
  }

  agafar(carta: CartaSetIMig){
    if(this.jugadorService.getJugador().contar()<=7.5){
      carta.girar();
      this.jugadorService.getJugador().agafar(carta);
      this.barallaService.getBaralla().eliminar(carta);
    }
  }

}
