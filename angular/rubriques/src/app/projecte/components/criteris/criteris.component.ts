import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Criteri } from '../../model/entitats/implementacions/Criteri';
import { Valoracio } from '../../model/entitats/implementacions/Valoracio';
import { ValoracionsComponent } from '../valoracions/valoracions.component';
@Component({
  selector: 'app-criteris',
  templateUrl: './criteris.component.html',
  styleUrls: ['./criteris.component.css']
})
export class CriterisComponent implements OnInit {
  criterisLocalStorage!: string | null;
  criterisForm!: FormGroup;
  criteris: Array<Criteri> = []
  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.criterisLocalStorage = localStorage.getItem('criteris');
    if(this.criterisLocalStorage != null){
      this.criteris = JSON.parse(this.criterisLocalStorage);
    }
    this.criterisForm = this.fb.group({
      titol: ['',
        {
          validators: [
            Validators.required,
          ]
        }
      ],
  })
}

  afegirCriteri(): void {
    this.criteris.push(new Criteri(this.criterisForm.get("titol")?.value, [new Valoracio('', -1)]));
    localStorage.setItem('criteris', JSON.stringify(this.criteris));
  }

}
