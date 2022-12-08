import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Foods} from 'src/app/Shared/models/food'
import { FoodService } from '../services/food/food.service';
import { Icart } from '../services/cart.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  foods:any[]=[]
  quantity:number=1
  constructor(private router:Router,private fs: FoodService) { }
  local=localStorage.getItem('cart'); 
  filtered:any
  totalpricecalculation:any
  totals:number=0

  
  //items:Icart[] =  this.local ? JSON.parse(this.local): [];
  items:any =  typeof(this.local)=='string' ? JSON.parse(this.local): this.local;
  
  ngOnInit(): void {
  console.log("items in init"+this.items)
  this.items.forEach((element: any) => {
        this.foods.push(this.fs.getFoodbyid(element.item_id))
   });
   
    //  this.items.forEach((foodie,i)=>{
   
  //   this.foods.push(this.fs.getFoodbyid(this.items[i].item_id)[0])
   // this.foods = this.items;

  //  })

  //  this.items.forEach((foodie,i)=>{
   
  //   this.foods.push(this.fs.getFoodbyid(this.items[i].item_id)[0])
    // console.log(this.foods)

  //  })
   //console.log(this.foods, " Final")



  
  /* for(var i=0;i< this.items.length;i++){
    console.log("item lenght"+this.items.length)
    this.foods=this.fs.getFoodbyid(this.items[i].item_id)
   }*/
   //this.foods= this.fs.getFoodbyid(this.items[0].item_id)

  //  this.quantity= this.items[0].quantity;
    
  }

  Ondelete(foodid:any){
    console.log("items"+this.items)
    this.items.splice(this.items.forEach((ele:any,i:number)=>{ele.item_id==foodid
      return i}),1)
    

    //let index = this.items.findIndex((element: { item_id: any; })=> element.item_id === foodid)
    //this.items=this.items.splice(2,1)
    localStorage.setItem('cart',JSON.stringify(this.items))
    alert('item deleted')
    setTimeout(()=>{
      this.foods=[]
      this.items.forEach((element: any) => {
        this.foods.push(this.fs.getFoodbyid(element.item_id))
  
      });

    },1000)
    

  }
  Onadd(foodid:any){
    this.items.forEach((ele:any,i:number)=>
    ele.item_id===foodid ? ele.quantity+=1: [])

    localStorage.setItem('cart',JSON.stringify(this.items))
    
    /*if(localStorage.key(this.quantity)===foodid)
    {
      console.log("in local");
      localStorage.key(this.quantity+=1)
    }
    console.log("outside local")*/

    
  }
  Onremove(foodid:any){
    this.items.forEach((ele:any,i:number)=>
    ele.item_id===foodid ? ele.quantity-=1: [])

    localStorage.setItem('cart',JSON.stringify(this.items))
    
    /*if(localStorage.key(this.quantity)===foodid)
    {
      console.log("in local");
      localStorage.key(this.quantity+=1)
    }
    console.log("outside local")*/

    
  }
  price(foodid:any){
    console.log("ghassan",foodid)
    let quant=0
    let pri=0
    this.items.forEach((element:any)=>
    element.item_id==foodid? quant=element.quantity:[]
    )
    this.foods.forEach((element:any)=>{
      element.id==foodid?pri=element.price:[]

    })
    this.totalpricecalculation=quant*pri

    this.totals+=this.totalpricecalculation
    console.log(this.totals)

 
    
  }
  total(price:any){
    let totalprice=0
   console.log(totalprice)
   totalprice+=price

  }
  checkoutF(){
    this.router.navigate(['/checkout'])
  }

}
