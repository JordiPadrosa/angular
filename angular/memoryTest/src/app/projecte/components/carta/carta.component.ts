import { Component, Input, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { Carta } from '../../model/entitats/implementacions/carta/Carta';
import { TaulaService } from '../../model/services/taula/taula.service';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: Carta;
  cartesSeleccionades:Array<Carta> = [];

  constructor(private taulaService: TaulaService) { }

  ngOnInit(): void {
    setTimeout(() => this.girarCartes(), 10000);

  }
  agafar(carta: Carta){
    this.cartesSeleccionades = [];
    let taula = this.taulaService.getTaula();
    let girar = 0; 
    for (let j = 0; j < taula.baralles[this.carta.fila].cartes.length; j++) {
      if(taula.baralles[this.carta.fila].cartes[j].visible == "true"){
      }else{
        girar++;
      }
    }
    if(girar == taula.baralles[this.carta.fila].cartes.length){
      carta.visible = "true";
    }
    this.comprovarCarta();
    if(this.cartesSeleccionades.length == 4){
      if(this.cartesSeleccionades[1].img != this.cartesSeleccionades[0].img || this.cartesSeleccionades[2].img != this.cartesSeleccionades[0].img || this.cartesSeleccionades[3].img != this.cartesSeleccionades[0].img){
        this.cartesSeleccionades.forEach(carta => {
          setTimeout(() => carta.visible = "false", 1000);
        })
        this.taulaService.sumContador();
      }else{
        this.cartesSeleccionades.forEach(carta => {
          carta.visible = "blocked";
        })
      }
      
    }
  }
  comprovarCarta(): void {
    let taula = this.taulaService.getTaula();
    for (let i = 0; i < taula.baralles.length; i++) {
      for (let j = 0; j < taula.baralles[i].cartes.length; j++) {
        if(taula.baralles[i].cartes[j].visible == "true"){
          this.cartesSeleccionades.push(taula.baralles[i].cartes[j]);
        }
      }
    }
  }
  girarCartes(): void {
    let taula = this.taulaService.getTaula();
    for (let i = 0; i < taula.baralles.length; i++) {
      for (let j = 0; j < taula.baralles[i].cartes.length; j++) {
        this.carta.visible = "false";
      }
    }
  }
  
}

