import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book, BooksService } from './services/books.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const emptyBook = {
  id: '',
  title: '',
  author: '',
  publication_year: 0,
  genre: '',
  summary: '',
  is_read: false,
}; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  selected: Book = { ...emptyBook };  
  title = 'services-exercices';

  constructor(private bookService: BooksService) {}
  
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(needle?: string) {
    this.bookService.getAll(needle).subscribe(books => {
      this.books = books;
      console.log(this.books);
    })
  }

  select(book: Book) {
    if (book.id === this.selected.id) {
      return this.selected = { ...emptyBook };
    }
    return this.selected = book;
  }

  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.loadBooks();
    })
  }

  submit() {
    if (this.selected.id) {
      return this.bookService.update(this.selected.id, this.selected).subscribe(() => {
        this.resetPage();
      })
    }
    return this.bookService.create({
      ...this.selected,
      id: this.generateNewBookId(),
    }).subscribe(() => {
      this.resetPage();
    })
  }

  generateNewBookId(): string {
    let maxId = 0;
    // Trouver le plus grand ID parmi les livres existants
    this.books.forEach(book => {
      const bookId = parseInt(book.id, 10); // Convertir l'ID en nombre
      if (bookId > maxId) {
        maxId = bookId;
      }
    });
    // Incrémenter le plus grand ID pour obtenir le prochain ID disponible
    return (maxId + 1).toString();
  }

  resetPage() {
    this.loadBooks();
    this.selected = { ...emptyBook };
  }

}
