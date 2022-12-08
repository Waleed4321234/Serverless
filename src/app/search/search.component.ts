import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Mypipe } from '../mypipe';
import { debounce } from 'lodash';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitem:string='';
  fullname:string='';
   name = {a: "Waleed", b: "Amjad"}
  values=''
  constructor(private fs: FoodService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
  
      this.searchitem=params['searchitem']
    })
  }
  search(){  
      this.router.navigateByUrl('/search/'+this.searchitem)
  }
  //updatedebouncetext=debounce((text:any)=>this.searchitem = text)
  
  onkey(event:any)  
  {
    console.log("on key", event.target.value)
    this.searchitem=event.target.value
    this.router.navigateByUrl('/search/'+this.searchitem)
   // this.updatedebouncetext(event.target.value)

  }
    /*this.searchitem=event.target.value
    console.log(this.values)
    this.router.navigateByUrl('/search/'+this.searchitem)
  }
  /*
  debounce(cb?:any,delay=1000){
    console.log('Waleed')
    return(...args: any)=>{
      setTimeout(() => {
        cb(...args)
        
      }, 1000);   
    }
  }*/
// Using _.debounce() method
// with its parameters
  myF = debounce(this.onkey , 1000);
}
