import {
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit {
  bookService = inject(BookService);
  books$: Observable<Book[]> | undefined;

  ngOnInit(): void {
    this.fetchAllBooks();
  }

  private fetchAllBooks(): void {
    this.books$ = this.bookService.getBooks();
  }
}
