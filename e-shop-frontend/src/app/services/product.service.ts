import {Injectable} from '@angular/core';
import {Product} from "../product/model/product";
import {HttpClient, HttpParams} from "@angular/common/http";
import {constants} from "../common/constants";
import {Observable} from "rxjs";
import {FileResponse} from "../product-details/model/file-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mapping: string = '';
  private products: Product[];

  constructor(private http: HttpClient) {
    this.products = [
      new Product(1, "boots", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, pariatur", 15, ""),
      new Product(2, "shirt", "Lquasi reprehenderit totam. Dignissimos modi mollitia sequi suscipi", 10, ""),
      new Product(3, "jeans", "Dignissimos illum ipsa iste libero modi nam, nemo placeat", 11, ""),
      new Product(4, "coat", "Accusamus consectetur cupiditate eos expedita, placeat quidem", 9, ""),
    ]
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(constants.productMapping + '/all');
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(constants.productMapping + '/' + id);
  }

  public uploadImage(data): Observable<FileResponse> {
    return this.http.post<FileResponse>(constants.productMapping + '/image', data);
  }
}
