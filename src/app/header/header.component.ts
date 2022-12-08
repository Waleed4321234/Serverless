import { Component, OnDestroy, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { CartsComponent } from '../carts/carts.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private cart:CartService,private router:Router) { }

  cartvalue=false
  cartsubscriber:Subscription=new Subscription();
  ngOnInit(): void {
    this.cartsubscriber=this.cart.Cartbool.subscribe(res=>{
      this.cartvalue=res
    })
  }
  navigatetocart(){
    console.log('Hi from check')
    if(localStorage.getItem('cart')!=null&&localStorage.getItem('cart')!='[]')
    {
      console.log(localStorage.getItem('cart'))
      console.log('Inside the Cart')
       setTimeout(()=>{
         this.router.navigate((['/carts']))
       },1000)
    }
    else{
      console.log('Outside the Cart')
      alert('No items Added')
    }
  }
    
  
  
  ngOnDestroy(): void {
    this.cartsubscriber.unsubscribe()
  }
  
}
