import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-Lebda-project';
  // addedProduct: Product[] = [];
  
  // Adding Number of product beside without repeating
//   onItemAdding(product: Product){
//   console.log(product);
//   if(this.addedProduct.includes(product))
//   {
//     product.Count++;
//   }else{
//     this.addedProduct.push(product);
//   }
// }
}
