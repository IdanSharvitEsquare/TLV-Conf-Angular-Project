import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
  private bookService = inject(BookService);
  books$: Observable<Book[]> | undefined;

  ngOnInit() {
    this.fetchAllBooks();
  }

  private fetchAllBooks() {
    this.books$ = this.bookService.getBooks();
  }
}
