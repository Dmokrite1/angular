import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
surname: any;
  submit(form: NgForm) {
    console.log(form);
    
  }
}
