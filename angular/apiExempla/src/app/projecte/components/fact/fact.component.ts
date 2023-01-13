import { Component, OnInit } from '@angular/core';
import { catFact } from '../../serveis/api/catFactApi';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent {
  fact!: string;
  factNth!: Array<{fact:string, lenght:number}>;
  allFact!: Array<{fact:string, lenght:number}>;

  constructor(private httpClient: catFact) {
    //console.log('Inici');
    this.httpClient.getFact().subscribe(
      data => {
        //console.log("Dins subscribe");
        //console.log(data);
        this.fact = data.fact;
      }
    )
    this.httpClient.getNthFacts(3).subscribe(
      response => {
        //console.log("Dins subscribe");
        //console.log(response);
        this.factNth = response.data;
      }
    )
    this.httpClient.getAllFacts().subscribe(
      response => {
        //console.log("Dins subscribe");
        //console.log(response);
        this.allFact = response.data;
      }
    )
    //console.log("Final");
  }


}
