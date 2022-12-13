import { Component, OnInit } from '@angular/core';
import { __generator } from 'tslib';
import { Baralla } from '../../model/entitats/implementacions/baralla/Baralla';
import { BarallaSetIMig } from '../../model/entitats/implementacions/baralla/BarallaSetIMig';
import { CartaSetIMig } from '../../model/entitats/implementacions/carta/CartaSetIMig';
import { ICartaSetIMig } from '../../model/entitats/interficies/carta/ICartaSetIMig';
import { BarallaService } from '../../model/services/baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  //baralla!: BarallaSetIMig;
  constructor(private barallaService: BarallaService) { }
  
  ngOnInit(): void {
    //this.baralla = new BarallaSetIMig();
  }

  public getBaralla(): BarallaSetIMig {
    return this.barallaService.getBaralla();
  }

}
