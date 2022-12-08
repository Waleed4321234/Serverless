import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { FormBuilder, FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Foods } from '../Shared/models/food';

@Component({
  selector: 'app-addfriendmodal',
  templateUrl: './addfriendmodal.component.html',
  styleUrls: ['./addfriendmodal.component.css']
})
export class AddfriendmodalComponent implements OnInit {
  item!: Foods;
  constructor(private fs:FoodService,private fb:FormBuilder) { }
  form=new FormGroup({
    id:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(1),
    
    ])),
    name:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ])),
    cooktime:new FormControl(''),
    price:new FormControl(''),
    favourite:new FormControl(''),
    stars:new FormControl(''),
    tags:new FormControl(''),
    



  })
  ngOnInit(): void {
  }
  onNo(){
    
    console.log('inside no')
    this.fs.showAddFriend=false

  }
  onloginsubmit(){
    this.item={
      id:this.form.get('id')?.value,
      name:this.form.get('name')?.value,
      cooktime:this.form.get('cooktime')?.value,
      price:this.form.get('price')?.value,
      favourite:this.form.get('favourite')?.value,
      // origins:this.form.get('origins')?.value,
      stars:this.form.get('stars')?.value,
      tags:this.form.get('tags')?.value,

    }
    debugger
    let q=0
    this.fs.getAll.forEach(element => {
      
      if(element.id==this.item?.id)
      {
        console.log(element.id)
        console.log(this.item.id)
        alert('Item id already exists')
        q=1
        return
      }
    
      
    });
    
    if(q==0){
      this.fs.getAll.push(this.item)
      this.fs.showAddFriend=false
      alert('Item Added')
      return
      
    }
    
  }
}
