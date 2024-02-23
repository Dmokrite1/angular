import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { banWordValidator } from './ban-word.validator';
import { pseudoNotInPasswordValidator } from './password.validators';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  // le premier argument du constructeur est un objet contenant chaque control
  signupForm = new FormGroup({
    pseudo: new FormControl('', [Validators.required, Validators.minLength(5)], banWordValidator),
    password: new FormControl(''),
    //pseudoNot... est un validateur du form pour connaitre la valeur des champs contenue ds formGroup
  }, pseudoNotInPasswordValidator)

  get pseudoControl() {
    return this.signupForm.get('pseudo') as FormControl;
  }
}
