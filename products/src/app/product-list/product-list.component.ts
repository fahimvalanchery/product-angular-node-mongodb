import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers:[ProductsService],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  tittle:String = "Product List";
  products:IProduct[];

 showImage:boolean=false;

 //function
 toggleImage():void{
   this.showImage = !this.showImage
 }

  constructor(private ps: ProductsService) { }

  ngOnInit():void {
    // this.products = this.ps.getProducts();
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }

}
