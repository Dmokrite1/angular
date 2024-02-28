import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProjectTodosComponent } from './project-list/project-todos/project-todos.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [{
    path: "project",
    component: ProjectListComponent,
    children: [{
        path: ':projectId/to-dos',
        component: ProjectTodosComponent
    }]
}, {
    path: 'todos',
    component: TodoListComponent
}, {
    path: 'stats',
    component: StatsComponent
}];
