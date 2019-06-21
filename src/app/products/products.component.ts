import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.service.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  arrProducts: Product[] = [];
  productsList = [];
  checkOutItems = [];
  constructor(private http: HttpClient,
    private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProductJSON().subscribe(response => {
      this.arrProducts = response;
    });
  }
  checkOutItem(item) {
    this.checkOutItems.push(item);
    if (localStorage.getItem("checkOutList")) {
      var newList = JSON.parse(localStorage.getItem("checkOutList"));
      newList.push(item);
      localStorage.setItem("checkOutList", JSON.stringify(newList));
    }
    else {
      localStorage.setItem("checkOutList", JSON.stringify(this.checkOutItems));
    }
  }

}

