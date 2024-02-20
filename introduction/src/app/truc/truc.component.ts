import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-truc',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" name="truc" [(ngModel)]="inputValue" (keyup.enter)="fireTruc()">
  `,
  styleUrl: './truc.component.css'
})
export class TrucComponent {
  inputValue = "";
  @Output() trucEmitter = new EventEmitter();

  fireTruc() {
    // émet un event trucEmitter et envoie la valeur de l'input
    this.trucEmitter.emit(this.inputValue)
    console.log('fired');
  }
}
