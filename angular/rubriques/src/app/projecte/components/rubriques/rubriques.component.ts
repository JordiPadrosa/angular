import { Component, OnInit } from '@angular/core';
import { Criteri } from '../../model/entitats/implementacions/Criteri';
import { Valoracio } from '../../model/entitats/implementacions/Valoracio';

@Component({
  selector: 'app-rubriques',
  templateUrl: './rubriques.component.html',
  styleUrls: ['./rubriques.component.css']
})
export class RubriquesComponent implements OnInit {
  criteris: Array<Criteri> = [];
  criterisLocalStorage!: string | null;
  valoracio!: Valoracio;
  numeros: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    this.criterisLocalStorage = localStorage.getItem('criteris');
    if(this.criterisLocalStorage != null){
      this.criteris = JSON.parse(this.criterisLocalStorage);
    }
    this.numeros = this.getNumeros();
  }

  getNumeros() {
    this.criteris.forEach(criteri => {
      for(let i = 0; i < criteri.valoracions.length; i++) {
        if(!this.numeros.includes(criteri.valoracions[i].valor) && criteri.valoracions[i].valor != 0){
          this.numeros.push(criteri.valoracions[i].valor);
        }
      }
    });
    return this.numeros.sort();
  }

  ordenarValoracions(criteri: Criteri, num: number): String {
    this.valoracio = new Valoracio('', 0);
    for(let i = 0; i < criteri.valoracions.length; i++) {
      if(criteri.valoracions[i].valor == num){
        this.valoracio = criteri.valoracions[i];
      }
    }
    return this.valoracio.descripcio;
  }


}
