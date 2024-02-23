import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book, BooksService } from '../books.service';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
  imports: [ReactiveFormsModule],
})
export class BookListComponent {
  books: Book[] = [];
  selectedBook: Book | null = null;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BooksService) {
    this.signUpForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publication_year: ['', Validators.required],
      genre: ['', Validators.required],
      summary: ['', Validators.required]
    });
  }

  selectBook(book: Book) {
    if (this.selectedBook === book) {
      this.selectedBook = null;
      this.signUpForm.reset();
    } else {
      this.selectedBook = book;
      this.signUpForm.patchValue({
        title: book.title,
        author: book.author,
        publication_year: book.publication_year,
        genre: book.genre,
        summary: book.summary
      });
    }
  }

  onSubmit() {
    if (!this.selectedBook) {
      // If no book is selected, create a new book
      if (this.signUpForm.valid) {
        const newBook: Partial<Book> = this.signUpForm.value;
        this.bookService.create(newBook).subscribe(() => {
          this.loadBooks();
          this.signUpForm.reset();
        });
      }
    } else {
      // Update the selected book
      if (this.signUpForm.valid) {
        const updatedBook: Partial<Book> = this.signUpForm.value;
        this.bookService.update(this.selectedBook.id, updatedBook).subscribe(() => {
          this.loadBooks();
          this.signUpForm.reset();
        });
      }
    }
  }

  loadBooks() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }
}