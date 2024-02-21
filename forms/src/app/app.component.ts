import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormsComponent, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
