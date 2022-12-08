import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[]

   get totalprice(): number
   {
    let totalprice=0
    this.items.forEach(item=>{
        totalprice += item.price;
        console.log(totalprice);
    })
    return totalprice

   }

}   