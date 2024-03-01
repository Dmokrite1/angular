import { Routes } from "@angular/router";
import { ProjectComponent } from "./project/project.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { ProjectTodosComponent } from "./project-todos/project-todos.component";
import { TodosListComponent } from "./todos-list/todos-list.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "projects",
    pathMatch: "full",
  },
  {
    path: "projects",
    component: ProjectComponent,
  },
  {
    path: "project/create",
    component: CreateProjectComponent,
  },
  {
    path: "todos",
    component: TodosListComponent,
  },
  {
    path: "projects/:projectId/todos",
    component: ProjectTodosComponent,
  },
];
