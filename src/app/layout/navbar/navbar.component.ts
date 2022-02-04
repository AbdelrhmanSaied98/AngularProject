import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  addedProducts: Product[] = []; 
  dropdownOpened = false;
  // productService = new ProductService();
    calculateTotal(): number{
    let totalPrice = 0;
    this.addedProducts.forEach(element => {
      
      totalPrice += (element.Count * (element.price - element.discount));
    });
    return totalPrice;
  }
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.cartHasBeenChanged.subscribe(
      (res)=>{
        this.addedProducts = res;

      },(err)=>{

      },()=>{}



    )
  }
// Bounus Removing Item when press on button
  removeItem(item :Product): void{
  // delete this.addedProducts[0]
  // this.addedProducts.pop();
    this.addedProducts.splice(this.addedProducts.indexOf(item),1)
}

}

function calculateTotal() {
  throw new Error('Function not implemented.');
}

