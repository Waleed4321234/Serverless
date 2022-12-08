import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import{Foods} from 'src/app/Shared/models/food'
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../Shared/models/Cart';
import { Router } from '@angular/router';
import { Subject,Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[]
  quantity:any
  local=localStorage.getItem('cart')
  items:any=typeof(this.local)=='string'?JSON.parse(this.local): this.local
  cartitemsubscriber:Subscription=new Subscription();
  constructor(public fs: FoodService,private router:ActivatedRoute,public cart:CartService,private route:Router) {
   
   }

  ngOnInit(): void {
    this.cartitemsubscriber=this.cart.CartItem.subscribe(res=>{
      this.items=res
    })
    
    this.router.params.subscribe(params=>{
      if(params['searchitem'])
      {
        this.foods=this.fs.getAll.filter(food=>food.name.toLowerCase().includes(params['searchitem'].toLowerCase()))
        console.log('Hello')
      }
      else if(params['tag']){
        console.log('In Tag')
        this.foods=this.fs.getAllFoodByTags(params['tag'])
      }
      else{
        this.getAllimages();
      }
      
    })
  }
  getAllimages(){
    this.foods=this.fs.getAll;
  }
  AddItem(foodid:number){
    this.cart.AddItem(foodid)
  }
  RemoveItem(foodid:number){
    this.items.forEach((ele:any,i:number)=>
    ele.item_id===foodid ? ele.quantity-=1: [])
    localStorage.setItem('cart',JSON.stringify(this.items))
  }
  AddNewitem(){
    this.fs.showAddFriend=true
    
  }
}
