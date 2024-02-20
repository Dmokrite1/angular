import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-flow';
  movies = [{
    title: "l'attaque des titans",
    releaseYear: 2020,
    genre: "parodie",
  }, {
    title: "Loutre",
    releaseYear: 2022,
    genre: 'animal',
  }, {
    title: "★☆★ Amaury goes to Holywood ★☆★",
    releaseYear: 1997,
    genre: "★☆ porno ☆★",
  }, {
    title: "la louloutre contre-attaque",
    releaseYear: 2158,
    genre: "bien chelou"
  }];
  evilOtters = [];
  viewMode: 'kanban' | 'list' | 'default' = 'default'
}
