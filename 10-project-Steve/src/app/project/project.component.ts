import { Component, Input, OnInit } from "@angular/core";
import { ProjectsService, Project } from "../todos.service";
import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterLink, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    FormsModule,
    RouterModule,
    DatePipe,
  ],
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  static loadProjects(loadProjects: any) {
    throw new Error('Method not implemented.');
  }
  projects: Project[] = [];
  showBaseProjects = false;
  selectedStatus = "Tous";
  sortedProjects: Project[] = [];

  baseUrl: string = "http://localhost:3000/projects/";
  newProject: Project = {
    title: "",
    description: "",
    id: 0,
    deadline: new Date(),
    status: "",
  };

  constructor(
    private projectService: ProjectsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAll().subscribe((projects) => {
      this.projects = projects;
      this.sortProjectsByStatus();
    });
  }

  onCreateProject(): void {
    if (this.newProject.title === "") {
      return;
    }

    this.projects.push(this.newProject);

    this.newProject = {
      title: "",
      description: "",
      id: 0,
      deadline: new Date(),
      status: "",
    };

    this.closeCreateProjectModal();
  }

  deleteProject(id: number) {
    return this.httpClient.delete(`${this.baseUrl}${id}`).subscribe(
      () => {
        console.log(`Project ${id} deleted successfully!`);
        this.loadProjects();
      },
      (error) => {
        console.error(`Error deleting project ${id}:`, error);
      }
    );
  }

  openCreateProjectModal() {
    const modal = document.getElementById("createProjectModal");
    if (modal) {
      modal.classList.remove("modal-hidden");
    }
  }

  closeCreateProjectModal() {
    const modal = document.getElementById("createProjectModal");
    if (modal) {
      modal.classList.add("modal-hidden");
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newProject: Project = form.value;

      this.projectService.create(newProject).subscribe(
        (createdProject) => {
          console.log("Project created successfully:", createdProject);
          this.closeCreateProjectModal();
          this.loadProjects();
        },
        (error) => {
          console.error("Error creating project:", error);
        }
      );
    }
  }
  getStatusColor(status: string): string {
    switch (status) {
      case "En cours":
        return "#ace7ff";
      case "Terminé":
        return "#bffcc6";
      case "En attente":
        return "#ffffd1";
      default:
        return "black";
    }
  }
  onSelectionChange(event: Event) {
    this.selectedStatus = (event.target as HTMLSelectElement).value;
    this.showBaseProjects = this.selectedStatus === "Tous";
    this.sortProjectsByStatus();
  }

  sortProjectsByStatus() {
    if (this.selectedStatus === "Tous") {
      this.sortedProjects = this.projects.slice(); 
    } else {
      this.sortedProjects = this.projects.filter(
        (project) => project.status === this.selectedStatus
      ); 
    }
  }

  isPastDeadline(deadline: Date): boolean {
    const today = new Date();
    return new Date(deadline) < today;
  }
  getRemainingDays(deadline: Date): number {
    const today = new Date();
    const diffInMs = new Date(deadline).getTime() - today.getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }
}
