import { Component, OnInit } from '@angular/core';
import { BooksService} from '../books.service';
import { IBook } from '../book-list/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  BookItem= new IBook(null,null,null,null);

  AddBook(){
    this.bs.newBook(this.BookItem);
  }
  constructor(private bs:BooksService) { }

  ngOnInit() {
  }

}
