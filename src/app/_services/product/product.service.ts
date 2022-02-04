import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ALLProductResponse, Product } from "src/app/_models/product/product.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn:'root'
})
export class ProductService {
    productsArray: Product[] = [];
    private cartArray: Product[] =[];
    cartHasBeenChanged :EventEmitter<Product []> = new EventEmitter<Product []>();
    constructor(private HttpClient:HttpClient){

    }
    getAllProducts():Observable<ALLProductResponse>{
        const headers = new HttpHeaders(
          {authorization: sessionStorage.getItem('token')!}
        )
        return this.HttpClient.get<ALLProductResponse>(environment.baseUrl + 'product', {headers:headers});
    }
    getProductById(id: number){
        return this.productsArray.find(product => product.id === id);
    }
    addProduct(product: Product){
        this.productsArray.push(product);
    }
    updateProduct(){}
    deleteProduct(){}
    addProductToCart(product:Product){
        console.log(product);
        if(this.cartArray.includes(product))
        {
          product.Count++;
        }else{
          this.cartArray.push(product);
          this.cartHasBeenChanged.emit(this.cartArray);
        }

    }


}