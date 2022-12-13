import { outputAst } from '@angular/compiler';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() nameEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  postName() {
    this.nameEvent.emit("hola nashe");
  }

}
