import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../types/interfaces/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly #http = inject(BookService);

  books: Observable<Book[]> = this.#http.getBook();
}
