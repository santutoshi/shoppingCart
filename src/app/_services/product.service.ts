import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, IProduct } from '../_model/product'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProductJSON(): Observable<Product[]> {
    return this.http.get<IProduct>('../../assets/static/data/products.json').map(response =>
       response.products as Product[]);

  }
}
