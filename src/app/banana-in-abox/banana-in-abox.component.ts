import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-banana-in-abox',
  standalone: true,
  imports: [FormsModule],
  template: `
  <input type="text" name="name" [(ngModel)]="inputValue" id="id">
  {{inputValue}}
  `,
  styleUrl: './banana-in-abox.component.css'
})
export class BananaInABoxComponent {
  inputValue = 'Je suis la valeur de input'
}
