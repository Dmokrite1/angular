import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  deadline: string;
  description: string;
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:3000/projects/';
  
  constructor(private httpService: HttpClient) {}  
  
  getProjectById(projectId: string) {
    return this.httpService.get<Project>(`${this.baseUrl}${projectId}`);
  }  
  
  getProjects(){
    return this.httpService.get<Project[]>(this.baseUrl);
  }

  getAll() {
    return this.httpService.get<Project[]>(this.baseUrl);
  }

  createProject(projectData: Project) {
    return this.httpService.post<Project[]>(this.baseUrl, projectData);
  }

  update(id: string, body: Partial<Project>) {
    return this.httpService.patch<Project>(`${this.baseUrl}${id}`, body);
  }

  delete(id: string) {
    return this.httpService.delete(`${this.baseUrl}${id}`);
  } 
}
