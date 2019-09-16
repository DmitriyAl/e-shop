import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @HostBinding('attr.class') cssClass: string = "col-lg-4 col-md-6 mb-4";
  @Input() private product: Product;

  constructor() { }

  ngOnInit() {
  }

}
