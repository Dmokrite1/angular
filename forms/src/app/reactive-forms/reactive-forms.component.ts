import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cannotBeForbiddenDomainValidator } from './email-domain.validator';
import { confirmPassword } from './password.validator';
import { uniqueEmailValidator } from './unique-email.validator';
import { banWords } from './ban-word.validator';
import { passwordContainsPseudo } from './passwordNotPseudo';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  signUpForm = new FormGroup({
    email: new FormControl('Ex: michel@michel.com', [Validators.required, Validators.email, cannotBeForbiddenDomainValidator], uniqueEmailValidator),
    password: new FormGroup({
        pwd: new FormControl('', []),
        confirm: new FormControl('', [])
    }, confirmPassword),
    pseudo: new FormGroup({
      pseudo: new FormControl('', [], ),
      pwd: new FormControl('', [],)
    }, [], [passwordContainsPseudo, banWords] )
  });

  //la méthode va chercher le form control dont le nom correspond à celui précisé dans le constructeur, dans notre exemple 'email' et nous ramène le formControl associé
  get EmailControl() {
    return this.signUpForm.get('email') as FormControl
  }

  get passwordControl() {
    return this.signUpForm.get('password') as FormGroup
  }

  submit() {
    console.log(this.signUpForm);
  }
}
