import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryArray:Category[] = [
    {id:1,name:'Mobile-Phones'},
    {id:2,name:'IPad'},
    {id:3,name:'Laptop'},
    {id:4,name:'AirPods'},
    {id:5,name:'TV'},
    {id:6,name:'PC'},
    {id:7,name:'Accsoriess'}

  ]
  constructor() { }
  getAllCategories():Category[]{
     return this.categoryArray;

  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
