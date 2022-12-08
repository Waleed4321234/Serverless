import {Pipe,PipeTransform } from "@angular/core";

@Pipe({

  name:"mypipe"  
})
export class Mypipe implements PipeTransform{
  totaladdition:number=0
    public transform(value: any, ...args: any[]) {
      debugger
      this.totaladdition+=value;
        return value.toUpperCase();
    }
}
