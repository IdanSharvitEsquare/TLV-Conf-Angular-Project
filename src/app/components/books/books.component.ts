import {
  Component,
  OnInit,
  PLATFORM_ID,
  TransferState,
  afterNextRender,
  inject,
  makeStateKey,
} from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformServer } from '@angular/common';

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
  platformId = inject(PLATFORM_ID);
  transferState = inject(TransferState);
  books: Book[] = [];

  // constructor() {
  //   afterNextRender(() => {
  //     console.log(localStorage.getItem('token'));
  //   });
  // }

  ngOnInit(): void {
    // if (this.transferState.hasKey<Book[]>(makeStateKey<Book[]>('books'))) {
    //   this.books = this.transferState.get<Book[]>(
    //     makeStateKey<Book[]>('books'),
    //     []
    //   );
    // } else {
    this.fetchAllBooks();
    // }
  }

  private fetchAllBooks(): void {
    this.books$ = this.bookService.getBooks();

    // this.bookService.getBooks().subscribe((books: Book[]) => {
    //   if (isPlatformServer(this.platformId)) {
    //     this.transferState.set<Book[]>(makeStateKey<Book[]>('books'), books);
    //   }
    //   this.books = books;
    // });
  }
}
