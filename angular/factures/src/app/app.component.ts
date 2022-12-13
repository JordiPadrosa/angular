import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    {codi: 1, nom: 'Llibre', quantitat: 1, preu: '10€', total: '10€'},
    {codi: 1, nom: 'Taula', quantitat: 1, preu: '30€', total: '30€'},
    {codi: 1, nom: 'Cadira', quantitat: 1, preu: '20', total: '20€'}
  ];

  selectedArticle?: Article;

  onSelect(article:Article) {
    this.selectedArticle = article;
  }
  addArticle() {
    this.articles.push(
      {codi: 1, nom: 'Llibre', quantitat: 1, preu: '10€', total: '10€'}
    )
  }
}
