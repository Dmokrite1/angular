import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cannotBeForbiddenDomainValidator } from './email-domain.validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  signUpForm = new FormGroup({
    email: new FormControl('Ex: michel@michel.com', [Validators.required, Validators.email, cannotBeForbiddenDomainValidator])
  });

  submit() {
    console.log(this.signUpForm);
  }


}
