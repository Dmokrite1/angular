import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TodoList {
  id: string;
  projectId: string,
  title: string;
  description: string;
  deadline: string;
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  baseUrl = 'http://localhost:3000/todos/';
  getTodoListsByProjectId: any;
  

  constructor(private httpService: HttpClient) {}  

  getTodoLists() {
    return this.httpService.get<TodoList[]>(this.baseUrl);
  }

  getAll() {
    return this.httpService.get<TodoList[]>(this.baseUrl);
  }

  createTodoList(todoListData: TodoList) {
    return this.httpService.post<TodoList[]>(this.baseUrl, todoListData);
  }

  update(id: string, body: Partial<TodoList>) {
    return this.httpService.patch<TodoList>(`${this.baseUrl}${id}`, body);
  }

  delete(id: string) {
    return this.httpService.delete(`${this.baseUrl}${id}`);
  } 
}

