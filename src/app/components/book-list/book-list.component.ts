import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BOOKS } from 'src/app/mocks/books.mocks';
import { WRITERS } from 'src/app/mocks/writers.mock';
import { Book } from 'src/app/models/book.model';
import { Writer } from 'src/app/models/writer.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  writer: Writer;
  books: Book[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.books = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.writer = WRITERS.find(writer => writer.id == params['writerId'])
    });

    this.books = BOOKS.filter(book => book.writerId === this.writer.id)
    console.log(this.books);
  }
}
