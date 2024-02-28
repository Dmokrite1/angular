import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TodoList, TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todoLists: TodoList[] = [];
  isAdded = false;
  isModalOpen = false;

  // On injecte la dépendance bookService et on la rend disponible au sein de notre class
  constructor(private route: Router, private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.loadTodoList();
    this.addTodoListForm.addControl("id", new FormControl(""));
  }

  onSubmit() {
    if (this.addTodoListForm.valid) {
      const todoListData = this.addTodoListForm.value;
      if (this.isAdded) {
        // Logique de mise à jour
        if (this.addTodoListForm.value.id) {
          this.todoListService
            .update(this.addTodoListForm.value.id, this.addTodoListForm.value)
            .subscribe(() => {
              this.loadTodoList();
              this.resetForm();
              this.isAdded = false;
            });
        }
      } else {
        // Logique de création
        const newTodoListId = this.generateNewTodoListId(); // Obtenir le prochain ID disponible
        todoListData.id = newTodoListId; // Assigner le nouvel ID au livre
        this.todoListService.createTodoList(todoListData).subscribe(() => {
          this.route.navigate(['/project', todoListData.id, 'to-dos']);
          this.loadTodoList();
          this.resetForm();
        });
      }
    }
  }

  generateNewTodoListId(): string {
    let maxId = 0;
    // Trouver le plus grand ID parmi les livres existants
    this.todoLists.forEach(todoList => {
      const todoListId = parseInt(todoList.id, 10); // Convertir l'ID en nombre
      if (todoListId > maxId) {
        maxId = todoListId;
      }
    });
    // Incrémenter le plus grand ID pour obtenir le prochain ID disponible
    return (maxId + 1).toString();
  }

  loadTodoList() {
    // .subscribe qui est l'équivalent du .then pour une promesse
    this.todoListService.getAll().subscribe(todoLists => {
      this.todoLists = todoLists;
    })
  }

  deleteTodoList(todoList: TodoList) {
    this.todoListService.delete(todoList.id).subscribe(() => {
      this.loadTodoList();
    })
  }

  resetForm() {
    this.addTodoListForm.reset();
    this.isAdded = false;
  }

  trackByTodoListId(todoList: TodoList): string {
    return todoList.id;
  }

  onTodoListClick(todoList: TodoList) {
    this.isAdded = true;
    this.addTodoListForm.patchValue(todoList);
    this.addTodoListForm.get("id")!.setValue(todoList.id); // Ajout de l'ID du livre au formulaire
    this.isModalOpen = !this.isModalOpen
  }

  addTodoListForm: FormGroup = new FormGroup({
    projectId: new FormControl(""),
    title: new FormControl(""),
    description: new FormControl(""),
    deadline: new FormControl(""),
    status: new FormControl("")
  });
};
