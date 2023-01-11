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
  resultat: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.criterisLocalStorage = localStorage.getItem('criteris');
    if(this.criterisLocalStorage != null){
      this.criteris = JSON.parse(this.criterisLocalStorage);
    }
    this.numeros = this.getNumeros();
  }

  getNumeros(): Array<number> {
    this.criteris.forEach(criteri => {
      for(let i = 0; i < criteri.valoracions.length; i++) {
        if(!this.numeros.includes(criteri.valoracions[i].valor) && criteri.valoracions[i].valor >= 0){
          this.numeros.push(criteri.valoracions[i].valor);
        }
      }
    });
    return this.numeros.sort((a, b) => a-b);
  }

  getValoracio(criteri: Criteri, num: number): String {
    this.valoracio = new Valoracio('', -1);
    for(let i = 0; i < criteri.valoracions.length; i++) {
      if(criteri.valoracions[i].valor == num){
        this.valoracio = criteri.valoracions[i];
      }
    }
    return this.valoracio.descripcio;
  }

  guardarChecked(criteriSeleccionat: Criteri, num: number): void {
    localStorage.setItem(criteriSeleccionat.titol, num.toString());
  }

  isChecked(criteri: Criteri, num: number): Boolean{
    let status = false;
    let valor = localStorage.getItem(criteri.titol);
    if(valor != null && parseInt(valor) == num){
      status = true;
    }
    return status;
  }

  calcularMitjana(): void{
    this.resultat = 0;
    for(let i = 0; i < this.criteris.length; i++) {
      let valor = localStorage.getItem(this.criteris[i].titol);
      if(valor != null){
        this.resultat = this.resultat + parseInt(valor);
      }
      if(i == this.criteris.length-1){
        this.resultat = this.resultat/this.criteris.length;
      }
    }
  }
  
}
