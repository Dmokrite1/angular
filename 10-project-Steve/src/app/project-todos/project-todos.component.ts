import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import { TodosService, Todo } from "../todos.service";
import { FormsModule } from "@angular/forms";
import { ProjectComponent } from "../project/project.component";
import { NgForm } from "@angular/forms";
import { TodosListComponent } from "../todos-list/todos-list.component";

@Component({
  selector: "app-project-todos",
  templateUrl: "./project-todos.component.html",
  styleUrls: ["./project-todos.component.css"],
  imports: [
    FormsModule,
    ProjectComponent,
    TodosListComponent,
    RouterLink,
    RouterModule,
  ],
  standalone: true,
})
export class ProjectTodosComponent implements OnInit {
  closeCreateProjectModal() {
    throw new Error("Method not implemented.");
  }

  projectId: number = 0;
  todos: Todo[] = [];
  newTodo: Todo = {
    title: "",
    description: "",
    projectId: this.projectId,
    deadline: new Date(),
    status: "",
  };

  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService
  ) {}

  ngOnInit(): void {
    this.projectId = +(this.route.snapshot.paramMap?.get("projectId") ?? 0);
    console.log(this.projectId);

    this.loadTodos();
  }

  openCreateTodoModal() {
    const modal = document.getElementById("createTodoModal");
    if (modal) {
      modal.classList.remove("modal-hidden");
    }
  }

  closeCreateTodoModal() {
    const modal = document.getElementById("createTodoModal");
    if (modal) {
      modal.classList.add("modal-hidden");
    }
  }

  loadTodos(): void {
    this.todoService.getTodosByProjectId(this.projectId).subscribe(
      (todos) => (this.todos = todos),
      (error) => console.error("Error fetching todos:", error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTodo: Todo = { ...form.value, projectId: this.projectId };

      this.todoService.create(newTodo).subscribe(
        (createdTodo) => {
          console.log("Project created successfully:", createdTodo);
          this.closeCreateTodoModal();
          this.loadTodos();
        },
        (error) => {
          console.error("Error creating project:", error);
        }
      );
    }
  }
}
