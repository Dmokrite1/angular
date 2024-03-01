import { Component, OnInit } from "@angular/core";
import { Todo, TodosService } from "../todos.service";
import { DatePipe } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todos-list",
  standalone: true,
  imports: [DatePipe, RouterLink, CommonModule, RouterModule],
  templateUrl: "./todos-list.component.html",
  styleUrl: "./todos-list.component.css",
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe(
      (todos) => {
        this.todos = todos;
      },
      (error) => {
        console.error("Error loading todos:", error);
      }
    );
  }
}
