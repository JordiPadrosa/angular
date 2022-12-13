import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { codiValid } from './Validator/Validator';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {

  incidenciaForm!: FormGroup;
  constructor(private fb: FormBuilder)  { }

  ngOnInit(): void {
    this.incidenciaForm = this.fb.group({
      codi: ['2022-',
        {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(8),
            codiValid()
          ]
        }
      ],
      titol: ['',
        {
          validators: [
            Validators.required,
            Validators.maxLength(100)
          ]
        }
      ],
      responsable: this.fb.group ({
        rol: [""],
        nom: [""]
      })

    })
  }
  onSubmit() {
    console.log(this.incidenciaForm.get("codi")?.value);
    console.log(this.incidenciaForm.get("titol")?.value);
    console.log(this.getControlResponsableRol()?.value);
  }

  getControlResponsableRol(): any {
    return this.incidenciaForm.get("responsable.rol");
  }
}
