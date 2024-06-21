import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import path from 'path';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService:AlertifyService,private http:HttpClient) {}
  title = "Ürün Listesi"
  filterText = ""
  products! :Product[];
  path="http://localhost:3000/products"

  addToCart(product:Product) {
    this.alertifyService.succes(product.name +" Sepete Eklendi")
  }
  ngOnInit() {
    this.http.get<Product[]>(this.path).subscribe(data=>{
      this.products=data;
    });
  }
}
