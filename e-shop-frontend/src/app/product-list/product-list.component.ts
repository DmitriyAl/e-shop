import { Component, OnInit } from '@angular/core';
import {Product} from "../product/model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  private products: Product[];

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.getProducts().subscribe(products => this.products = products);
  }

}
