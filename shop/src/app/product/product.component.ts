import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title = "Ürün Listesi"
  filterText = ""
  products :Product[] = [
    {id:1,name:"Laptop",price:2500, categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww"},
    {id:2,name:"Mouse",price:250, categoryId:2,description:"LogiTech",imageUrl:"https://images.unsplash.com/photo-1594008671689-8d8b9480cae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdXNlJTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D"},
    {id:3,name:"Klavye",price:500, categoryId:3,description:"Razer",imageUrl:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"},
    {id:4,name:"Laptop",price:2500, categoryId:4,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww"},
    {id:5,name:"Mouse",price:250, categoryId:5,description:"LogiTech",imageUrl:"https://images.unsplash.com/photo-1594008671689-8d8b9480cae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdXNlJTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D"},
    {id:6,name:"Klavye",price:500, categoryId:6,description:"Razer",imageUrl:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"}
  ]
  addToCart(product:Product) {
    alert(product.name + " Sepete Eklendi")
  }
}
