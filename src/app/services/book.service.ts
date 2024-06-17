import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);
  private ApiUrl = 'https://potterapi-fedeperin.vercel.app/en/';

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.ApiUrl}books`);
  }
}
