import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


export interface Project {
  id?: number;
  title: string;
  deadline: Date;
  description: string;
  status: string;
}
export interface Todo {
  id?: number;
  projectId: number;
  title: string;
  description: string;
  deadline: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  [x: string]: any;
  baseUrl = 'http://localhost:3000/projects/';
  httpService = inject(HttpClient);

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl);
  }

  update(id: string, body: Partial<Project>) {
    return this.httpClient.patch<Project>(`${this.baseUrl}${id}`, body);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  } 
  create(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.baseUrl, project); // Exemple d'appel API
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  baseUrl = 'http://localhost:3000/todos/';
  httpService = inject(HttpClient);

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpService.get<Todo[]>(this.baseUrl);
  }

  update(id: string, body: Partial<Todo>) {
    return this.httpService.patch<Todo>(`${this.baseUrl}${id}`, body);
  }

  delete(id: string) {
    return this.httpService.delete(`${this.baseUrl}${id}`);
  } 

  create(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  getTodosByProjectId(projectId: number): Observable<Todo[]> {
    const url = `${this.baseUrl}?projectId=${projectId}`;
    return this.httpClient.get<Todo[]>(url);
  }
}
