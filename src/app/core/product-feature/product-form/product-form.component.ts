import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/product/category.model';
import { PaymentType } from 'src/app/_models/product/Payment-Type.model';
import { Product } from 'src/app/_models/product/product.model';
import { Tag } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { ProductService } from 'src/app/_services/product/product.service';
import { TagService } from 'src/app/_services/product/tag.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  paymentTypes: PaymentType[] = [];
  categoryArray: Category[] = [];
  tagArray: Tag[] = [];
  product = {}  as Product;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService, private router: Router, private paymentTypeService: PaymentTypeService,private categoryService: CategoryService,private tagService: TagService) { }

  ngOnInit(): void {
    
    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.editMode=true;
    }
    if(this.editMode)
    {
      this.getProductById();
    }


    this.getAllProductTypes();
    this.getAllTags();
    this.getAllCategories()
  }
  getProductById(): void{
   const id =  +this.activatedRoute.snapshot.params['productid'];
   console.log(id);
    this.product = this.productService.getProductById(id)!;
    console.log(this.product);

  }

  getAllProductTypes(): void {
    this.paymentTypes = this.paymentTypeService.getAllPaymentTypes();
  }
  getAllCategories(){
    this.categoryArray = this.categoryService.getAllCategories();
  }
  getAllTags(){
    this.tagArray = this.tagService.getAllTags();
  }
  onCheckBoxChanged(index: number){
    if(this.product.paymentTypes){
      this.product.paymentTypes = [...this.product.paymentTypes,this.paymentTypes[index]]

    }else {
      this.product.paymentTypes = [this.paymentTypes[index]];
    }
    console.log(this.product);

  }
  onAddProduct(form: any) {
    console.log(form.value);
    const product: Product = form.value;
    this.productService.addProduct(product);
    this.router.navigateByUrl('product/listing');
  }
  DeleteTag(tag: Tag): void{
    this.tagArray.splice(this.tagArray.indexOf(tag),1)
  }
  DeleteAllTags(): void{
    this.tagArray.splice(0)
  }
}
