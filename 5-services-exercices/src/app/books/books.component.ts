import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  // httpClientModule est importé dans app.config.ts pour l'avoir en global et faire fonctionné les services
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook: [Book];
  signUpForm: any;

  // on injecte la dépendance httpClient et on la rend disponible dans notre classe
  constructor(private httpService: HttpClient, private bookService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    // .subscribe est l'équivalent du .then pour une promesse
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    })
  }

  markAsRead(book: Book) {
    this.bookService.update(book.id, {
      is_read: !book.is_read,
    }).subscribe(() => {
      // recharge la list des bouquins sinon l'affichage ne se met pas à jour, toujours mettre à jour avec les dernières données
      this.loadBooks();
      console.log('patch terminé');
    })
  }

  deleteBook(book: Book) {
    this.bookService.delete(book.id).subscribe(() => {
      this.loadBooks();
    })
  }

  selectBook(book: Book) {
    if (this.selectedBook === book) {
      this.selectedBook = [];
    } else {
      this.selectedBook = book;
    }
  }
  
}
