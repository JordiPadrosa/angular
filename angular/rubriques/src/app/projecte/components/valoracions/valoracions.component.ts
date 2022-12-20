import { Component, OnInit } from '@angular/core';
import { Criteri } from '../../model/entitats/implementacions/Criteri';

@Component({
  selector: 'app-valoracions',
  templateUrl: './valoracions.component.html',
  styleUrls: ['./valoracions.component.css']
})
export class ValoracionsComponent implements OnInit {
  criterisLocalStorage!: string | null;
  criteris: Array<Criteri> = [];
  constructor() {
  }

  ngOnInit(): void {
    this.criterisLocalStorage = localStorage.getItem('criteris');
    if(this.criterisLocalStorage != null){
      this.criteris = JSON.parse(this.criterisLocalStorage);
      console.log(this.criteris);
    }
  }

}
