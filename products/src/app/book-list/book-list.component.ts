import { Component, OnInit } from '@angular/core';
import {IBook} from './book.model'
import {BooksService} from '../books.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  providers:[BooksService],
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title="Books";
  books:IBook[];
  constructor(private bs:BooksService) { }

  ngOnInit() {
    this.bs.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    });


  }

}
