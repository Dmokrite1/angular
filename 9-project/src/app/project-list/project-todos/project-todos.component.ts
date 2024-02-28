import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { TodoList, TodoListService } from '../../todo-list.service';
import { Project, ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-todos',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-todos.component.html',
  styleUrl: './project-todos.component.css'
})
export class ProjectTodosComponent {

}
