import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../services/books.service';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  @Input() declare book: Book;
  @Output() submitBook = new EventEmitter();

  get formTitle() {
    if (this.book.id) {
      return 'Editer ' + this.book.title;
    }
    return 'Créer un livre';
  }

  submit(form: NgForm) {
    this.submitBook.emit(form.value);
  }
}
