import { Component, Input, OnInit } from '@angular/core';
import { Baralla } from '../../model/entitats/implementacions/baralla/Baralla';
import { BarallaService } from '../../model/services/baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  @Input() baralla!: Baralla;
  constructor(private barallaService: BarallaService) { }
  
  ngOnInit(): void {
    //this.baralla = new Baralla();
    console.log(this.baralla);
  }

  public getBaralla(): Baralla {
    return this.barallaService.getBaralla();
  }
} 