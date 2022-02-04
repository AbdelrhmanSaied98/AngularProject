import { Category } from "./category.model";
import { PaymentType } from "./Payment-Type.model";
import { ProductLang } from "./product-lang.model";
import { Supplier } from "./supplier.model";
import { Tag } from "./tags.model";

export interface Product{
    id: number;
    data:ProductLang[];
    price: number;
    discount:number;
    imageUrl?:string;
    supplier?:Supplier;
    Count:number;
    category:Category;
    tags:Tag[];
    paymentTypes:PaymentType[];
}
export interface ALLProductResponse {
    product:Product[],
    numberOfProducts:number
}