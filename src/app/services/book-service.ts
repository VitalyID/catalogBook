import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Book } from '../types/interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  URL = 'assets/mock/books.json';

  readonly #http = inject(HttpClient);

  getBook() {
    return this.#http.get<Book[]>(this.URL).pipe(
      catchError((error) => {
        console.log('Error get books');
        return throwError(() => Error);
      })
    );
  }
}
