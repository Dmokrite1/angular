import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() deleteBook = new EventEmitter();
  @Output() selectBook = new EventEmitter();
  idToDelete : string | undefined;
  selectedId : string | undefined;

  openDeleteConfirm(id: string) {
    this.idToDelete = id;
  }

  cancelDelete() {
    this.idToDelete = undefined;
  }

  select(book: Book) {
    if (book.id === this.selectedId) {
      this.selectedId = undefined;
      return this.selectBook.emit({});
    }
    this.selectedId = book.id;
    this.selectBook.emit(book);
  }

  confirmDelete() {
    this.deleteBook.emit(this.idToDelete);
  }
}
