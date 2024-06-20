import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategotyComponent {
  title="Kategori Listesi"
  categories:Category[] = [
    {id:1,name:"Elektronik"},
    {id:2,name:"Bilgisayar"},
    {id:3,name:"Oyuncu"},
  ]
}
