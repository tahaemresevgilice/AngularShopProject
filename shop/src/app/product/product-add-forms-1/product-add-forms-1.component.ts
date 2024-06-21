import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from '../../category/category';

@Component({
  selector: 'app-product-add-forms-1',
  templateUrl: './product-add-forms-1.component.html',
  styleUrl: './product-add-forms-1.component.css',
  providers:[CategoryService]
})
export class ProductAddForms1Component implements OnInit {
  constructor(private categoryService:CategoryService) {}
  model:Product = new Product();
  categories!:Category[]
  ngOnInit() {
    this.categoryService.getProducts().subscribe(data=>{
      this.categories = data
    });
  }
}
