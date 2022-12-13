import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../../model/entitats/implementacions/Incidencia';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {
  incidencia: Incidencia = new Incidencia();

  submit() {
    console.log(`${this.incidencia.codi} - ${this.incidencia.titol}`);
  }
  
}
