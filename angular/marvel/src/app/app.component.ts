import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: Hero[] = [
    {id: 1, name: 'Spiderman'},
    {id: 2, name: 'Ironman'},
    {id: 3, name: 'Thor'},
    {id: 4, name: 'Hulk'},
    {id: 5, name: 'Pau'},
    {id: 6, name: 'Punisher'}
  ];
  
  selectedHero?: Hero;

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    this.heroes.push(
      {id: 10, name: "nashe"}
    )
  }

  eventDisparat(event: string) {
    console.log(event);
  }
}
