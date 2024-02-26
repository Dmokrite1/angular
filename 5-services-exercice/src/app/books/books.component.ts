import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  isAdded = false;
  isModalOpen = false;

  // On injecte la dépendance bookService et on la rend disponible au sein de notre class
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
    this.addBookForm.addControl("id", new FormControl(""));
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      const bookData = this.addBookForm.value;
      if (this.isAdded) {
        // Logique de mise à jour
        if (this.addBookForm.value.id) {
          this.bookService
            .update(this.addBookForm.value.id, this.addBookForm.value)
            .subscribe(() => {
              this.loadBooks();
              this.resetForm();
              this.isAdded = false;
            });
        }
      } else {
        // Logique de création
        const newBookId = this.generateNewBookId(); // Obtenir le prochain ID disponible
        bookData.id = newBookId; // Assigner le nouvel ID au livre
        this.bookService.createBook(bookData).subscribe(() => {
          this.loadBooks();
          this.resetForm();
        });
      }
    }
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

  loadBooks() {
    // .subscribe qui est l'équivalent du .then pour une promesse
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    })
  }

  markAsRead(book: Book) {
    this.bookService.update(book.id, {
      is_read: !book.is_read,
    }).subscribe(() => {
      // On recharge la liste des bouquins car sinon l'affichage ne se met pas à jour
      // Car le fait de mettre la base de données à jour n'a pas d'incidence sur le taleau
      // de livre présent dans notre class. Donc, on le met à jour avec les dernières données
      this.loadBooks();
      console.log('patch terminé !');
    });
  }

  deleteBook(book: Book) {
    this.bookService.delete(book.id).subscribe(() => {
      this.loadBooks();
    })
  }
  
  resetForm() {
    this.addBookForm.reset();
    this.isAdded = false;
  }

  trackByBookId(book: Book): string {
    return book.id;
  }

  onBookClick(book: Book) {
    this.isAdded = true;
    this.addBookForm.patchValue(book);
    this.addBookForm.get("id")!.setValue(book.id); // Ajout de l'ID du livre au formulaire
    this.isModalOpen = !this.isModalOpen
  }
  
  addBookForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl("", Validators.required),
    publication_year: new FormControl("", Validators.required),
    genre: new FormControl("", Validators.required),
    main_characters: new FormControl("", Validators.required),
    summary: new FormControl("", Validators.required),
  });
};