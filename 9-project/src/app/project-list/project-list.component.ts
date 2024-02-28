import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Project, ProjectService } from '../project.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
projects: Project[] = [];
isAdded = false;
isModalOpen = false;

// On injecte la dépendance bookService et on la rend disponible au sein de notre class
constructor(private router: Router, private projectService: ProjectService) {}

ngOnInit(): void {
  this.loadProject();
  this.addProjectForm.addControl("id", new FormControl(""));
}

onSubmit() {
  if (this.addProjectForm.valid) {
    const projectData = this.addProjectForm.value;
    if (this.isAdded) {
      // Logique de mise à jour
      if (this.addProjectForm.value.id) {
        this.projectService
          .update(this.addProjectForm.value.id, this.addProjectForm.value)
          .subscribe(() => {
            this.loadProject();
            this.resetForm();
            this.isAdded = false;
          });
      }
    } else {
      // Logique de création
      const newProjectId = this.generateNewProjectId(); // Obtenir le prochain ID disponible
      projectData.id = newProjectId; // Assigner le nouvel ID au livre
      this.projectService.createProject(projectData).subscribe(() => {
        this.loadProject();
        this.resetForm();
      });
    }
  }
}

generateNewProjectId(): string {
  let maxId = 0;
  // Trouver le plus grand ID parmi les livres existants
  this.projects.forEach(project => {
    const projectId = parseInt(project.id, 10); // Convertir l'ID en nombre
    if (projectId > maxId) {
      maxId = projectId;
    }
  });
  // Incrémenter le plus grand ID pour obtenir le prochain ID disponible
  return (maxId + 1).toString();
}

loadProject() {
  // .subscribe qui est l'équivalent du .then pour une promesse
  this.projectService.getAll().subscribe(projects => {
    this.projects = projects;
  })
}

deleteProject(project: Project) {
  this.projectService.delete(project.id).subscribe(() => {
    this.loadProject();
  })
}

resetForm() {
  this.addProjectForm.reset();
  this.isAdded = false;
}

trackByProjectId(project: Project): string {
  return project.id;
}

onProjectClick(project: Project) {
  this.isAdded = true;
  this.addProjectForm.patchValue(project);
  this.addProjectForm.get("id")!.setValue(project.id);
  this.isModalOpen = !this.isModalOpen
  this.router.navigate(['/project', project.id, 'todos']);
}

addProjectForm: FormGroup = new FormGroup({
  title: new FormControl(""),
  deadline: new FormControl(""),
  description: new FormControl(""),
  status: new FormControl("")
});
};