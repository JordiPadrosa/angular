import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-criteris',
  templateUrl: './criteris.component.html',
  styleUrls: ['./criteris.component.css']
})
export class CriterisComponent implements OnInit {
  form!: FormGroup;
  criteris:Array<FormControl> = [];
  constructor(private fb: FormBuilder) {
    this.afegirForm();
  }
  ngOnInit(): void {
  }

  onSubmit() {
  }
  afegirForm() {
    this.criteris.push(new FormControl(''));
  }

  borrarForm() {
    if(this.criteris.length > 1){
      this.criteris.pop();
    }
  }

  afegirCriteris() {
    //crear criteris i reenviar a pagina per posar valoracions als criteris
  }
}
