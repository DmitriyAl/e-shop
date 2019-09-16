import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from "../../../product/model/product";

@Component({
  selector: 'app-carousel-product',
  templateUrl: './carousel-product.component.html',
  styleUrls: ['./carousel-product.component.less']
})
export class CarouselProductComponent implements OnInit {
  @Input() private product: Product;
  @Input() private style: string;
  @HostBinding('attr.class') cssClass: string = "carousel-item";

  constructor() { }

  ngOnInit() {
    if (this.style != null) {
      this.cssClass = this.cssClass + ' ' + this.style;
    }
  }

}
