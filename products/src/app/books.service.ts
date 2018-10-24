import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item){
    return this.http.post("http://localhost:3000/insertbook",{"book":item})
    .subscribe(data=>{console.log(data)}
    )};
  constructor(private http:HttpClient) { }
}
