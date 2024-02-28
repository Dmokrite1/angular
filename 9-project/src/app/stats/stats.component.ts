
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Project, ProjectService } from '../project.service';
import { TodoList, TodoListService } from '../todo-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
/*
  projects: Project[] = [];
  todosList: TodoList[] = [];

  totalProjects: number = 0;
  todoCountByStatus: { [key: string]: number } = {};
  projectCountByStatus: { [key: string]: number } = {};
  overdueProjects: Project[] = [];

  closestTasks: TodoList[] = [];
  todoLists: TodoList[] = [];

  constructor(
    private projectService: ProjectService,
    private todoListService: TodoListService
  ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
    this.todoLists = this.todoListService.getTodoLists();

    this.calculateStats();
  }

  calculateStats(): void {
    // Calcul du nombre total de projets
    this.totalProjects = this.projects.length;

    // Calcul du nombre de tâches par statut
    this.todoCountByStatus = {};
    for (const todoList of this.todoLists) {
      if (!this.todoCountByStatus[todoList.status]) {
        this.todoCountByStatus[todoList.status] = 0;
      }
      this.todoCountByStatus[todoList.status]++;
    }

    // Calcul du nombre de projets par statut
    this.projectCountByStatus = {};
    for (const project of this.projects) {
      if (!this.projectCountByStatus[project.status]) {
        this.projectCountByStatus[project.status] = 0;
      }
      this.projectCountByStatus[project.status]++;
    }

    // Calcul des projets en retard
    this.overdueProjects = this.projects.filter(project => new Date(project.deadline) < new Date());

    // Convertir les deadlines en Date
    const parseDate = (deadline: string): Date => {
      const date = new Date(deadline);
      if (isNaN(date.getTime())) {
        throw new Error(`Date invalide : ${deadline}`);
      }
      return date;
    };

    // Calcul des tâches les plus proches
    this.closestTasks = this.todoLists.sort<TodoList>((a, b) => {
      const dateA = parseDate(a.deadline);
      const dateB = parseDate(b.deadline);

      return dateA < dateB ? -1 : (dateA > dateB ? 1 : 0);
    }).slice(0, 10);
  }*/
}

