import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  local=localStorage.getItem('cart'); 
  items:any =  typeof(this.local)=='string' ? JSON.parse(this.local): this.local;
  quantities:number=0

  ngOnInit(): void {
    this.items.forEach((element: { quantity: any; }) => {
      this.quantities+=element.quantity
      
    });
    this.quantities=this.quantities*10
    console.log(this.quantities)
  }
  

}
