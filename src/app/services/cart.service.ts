import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { CartItem } from '../Shared/models/CartItem';
import { HeaderComponent } from '../header/header.component';
import { Subject } from 'rxjs';
import { Cart } from '../Shared/models/Cart';

export interface Icart{
  item_id:number
  quantity:number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  header:HeaderComponent | undefined
  i = localStorage.getItem('cart');
  item:Icart[] =  this.i ? JSON.parse(this.i): [];
  Cartbool=new Subject<boolean>();
  CartItem=new Subject<Array<Icart>>;
  AddItem(foodid:number){

    console.log("in cart", this.item)
    let found=false

    this.item.forEach((element, i) => {
      if(element.item_id==foodid){
        found=true
        //  element.quantity=+1;
        this.item[i].quantity+=1;
        localStorage.setItem("cart",JSON.stringify(this.item))
        console.log(" asddsaa")
        this.Cartbool.next(true)
        this.CartItem.next(this.item)

          
      }
      
      
    });
    if(found==false){
      console.log("not f")
      this.item.push({quantity:1,item_id:foodid})
      localStorage.setItem("cart",JSON.stringify(this.item))
      this.Cartbool.next(true)
      this.CartItem.next(this.item)
    }
    console.log("in cart", this.item)
    



  }
  getmyval(){
    return this.Cartbool
  }
  
  removeItem(){

  }
  constructor() { }
}
