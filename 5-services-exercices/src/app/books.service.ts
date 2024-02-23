import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
  publication_year: number;
  genre: string;
  main_characters: string[];
  summary: string;
  is_read?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  post() {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:3000/books/';

  constructor(private httpService: HttpClient) {}

  getAll() {
    return this.httpService.get<Book[]>(this.baseUrl)
  }

  update(id: string, body: Partial<Book>) {
    return this.httpService.patch<Book>(`${this.baseUrl}${id}`, body);
  }

  create(body: Partial<Book>) {
    return this.httpService.post<Book>(this.baseUrl, body);
  }  

  delete(id: string) {
    return this.httpService.delete(`${this.baseUrl}${id}`)
  }
}
