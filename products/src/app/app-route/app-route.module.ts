import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {AddProductComponent} from '../add-product/add-product.component';
import {ProductListComponent} from '../product-list/product-list.component';
import {BookListComponent} from '../book-list/book-list.component';
import {AddBookComponent} from '../add-book/add-book.component';

const route:Routes=[
  {path:'',component:ProductListComponent},
  {path:'add',component:AddProductComponent},
  {path:'books',component:BookListComponent},
  {path:'addbook',component:AddBookComponent}
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule,
  ],
  declarations: []
})
export class AppRouteModule { }
