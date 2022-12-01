import { Component, OnInit } from '@angular/core';
import { Taula } from '../../model/entitats/implementacions/taula/Taula';
import { TaulaService } from '../../model/services/taula/taula.service';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})
export class TaulaComponent implements OnInit {
  contador: number = 0;
  constructor(private taulaService: TaulaService) { }

  ngOnInit(): void {
  }

  public getTaula(): Taula {
    return this.taulaService.getTaula();
  }
  public getContador(): Number {
    return this.taulaService.getContador();
  }

}
