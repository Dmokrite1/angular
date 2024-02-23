import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: string;
  main_characters: string[];
  summary: string;
  is_read?: boolean;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  // on injecte la dépendance httpClient et on la rend disponible dans notre classe
  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    // .subscribe est l'équivalent du .then pour une promesse
    this.httpService.get<Book[]>('http://localhost:3000/books').subscribe(books => {
      this.books = books;
    })
  }

  markAsRead(book: Book) {
    this.httpService.patch(`http://localhost:3000/books/${book.id}`, {
      is_read: !book.is_read,
    }).subscribe(() => {
      // recharge la list des bouquins sinon l'affichage ne se met pas à jour, toujours mettre à jour avec les dernières données
      this.loadBooks();
      console.log('patch terminé');
    })
  }

  deleteBook(book: Book) {
    this.httpService.delete(`http://localhost:3000/books/${book.id}`).subscribe(() => {
      this.loadBooks();
    })
  }
}
