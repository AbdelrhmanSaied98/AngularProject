import { Injectable } from '@angular/core';
import { PaymentType } from 'src/app/_models/product/Payment-Type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  paymentTypes:PaymentType[] =[
    {id:1,name:'COD'},
    {id:2,name:'Paypal'},
    {id:3,name:'Credit Card'},
    {id:4,name:'Debit Card'},
    {id:5,name:'Visa'},
    {id:6,name:'Master Card'},
    {id:7,name:'American Express'}, 
  ]
  constructor() { }
  getAllPaymentTypes(): PaymentType[]{
    return this.paymentTypes;
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}



