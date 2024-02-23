import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  submit(form: NgForm) {
    console.log(form);
  }
}
