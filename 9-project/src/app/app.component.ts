import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StatsComponent } from './stats/stats.component';
import { ProjectTodosComponent } from './project-list/project-todos/project-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent, TodoListComponent, StatsComponent, RouterLink, ProjectTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '9-project';
}
