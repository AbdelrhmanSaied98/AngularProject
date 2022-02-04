import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  product :Product = {} as Product;
  relatedProducts!:Product[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductById();
    this.getRealtedProducts();
  }
  getProductById(){
    this.activatedRoute.params.subscribe(
      (params)=>{
        var id =  +this.activatedRoute.snapshot.params['productid'];
        console.log(params);
        this.product = this.productService.getProductById(id)!;
        console.log(this.product);
      }  
  )
   }
   getRealtedProducts(){
    //  this.relatedProducts = this.productService.getAllProducts().slice(0,4);
   }
   }