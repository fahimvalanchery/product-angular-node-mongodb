import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../product-list/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  //providers chilappo vendi varum
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductsService) { }
  productItem = new IProduct(null,null,null,null,null,null,null,null);

  AddProduct()
  {
    this.ps.newProduct(this.productItem);
  }

  ngOnInit() {
  }

}
