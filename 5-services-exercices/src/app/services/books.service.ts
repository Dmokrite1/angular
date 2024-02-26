import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  author: string;
  publication_year: number;
  genre: string;
  summary: string;
  is_read?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = 'http://localhost:3000/books/';
  // Le client http sera automatiquement injecté et utilisable partout dans ma class
  // Il sera accessible avec this.httpClient
  constructor(private httpClient: HttpClient) { }

  // effectue une requête get à l'adresse http://localhost:3000
  getAll(needle?: string) {
    return this.httpClient.get<Book[]>(this.baseUrl + this.getSearchQueryParam(needle)); 
  }

  private getSearchQueryParam(needle?: string) {
    if (needle) {
      return `?q=${needle}`;
    }
    return "";
  }

  // effectue une requête delete à l'adresse http://localhost:3000/:id
  delete(id: string) {
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }

  create(book: Book) {
    return this.httpClient.post<Book>(this.baseUrl, book);
  }

  update(id: string, book: Partial<Book>) {
    return this.httpClient.patch<Book>(`${this.baseUrl}${id}`, book);
  }
}
