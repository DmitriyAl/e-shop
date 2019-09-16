import {Component, OnInit} from '@angular/core';
import {Product} from "../product/model/product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ImageSnippet} from "./model/image-snippet";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  private form: FormGroup;
  private product: Product;
  private selectedFile;

  constructor(private service: ProductService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = fb.group({image: ''}, { updateOn: 'submit' });
  }

  ngOnInit() {
    this.getProduct();
  }

  private getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProduct(id).subscribe(resp => this.product = resp);
  }

  private saveImage(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('id', this.product.id.toString());
    this.service.uploadImage(formData).subscribe(
      (res) => {
        this.product.image = res.uri;
      },
      (err) => {
        console.log("Too big")
      })
  };

  processImage(event) {
    this.selectedFile = event.target.files[0];
  }
}
