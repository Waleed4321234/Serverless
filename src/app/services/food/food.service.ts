import { Injectable } from '@angular/core';
import{Foods} from 'src/app/Shared/models/food'
import { idropdownoption, tag } from 'src/app/Shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  showAddFriend=false

  constructor() { }
  getAll:Foods[]=[
    
      {
        id:1,
        name:"pizza pepporoni",
        cooktime:'10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food-1.jpg',
        tags:['fastfood','pizza','lunch']

      },
      {
        id:2,
        name:"bar bq",
        cooktime:'10-20',
        price:3,
        favourite:false,
        origins:['India,Paksitan'],
        stars:4.5,
        imageUrl:'/assets/food-2.jpg',
        tags:['Fastfood','Pizza','Lunch']

      },
      {
        id:3,
        name:"Chinese",
        cooktime:'10-20',
        price:6,
        favourite:false,
        origins:['China,France'],
        stars:4.5,
        imageUrl:'/assets/food-3.jpg',
        tags:['fastfood','lunch']

      },
      {
        id:4,
        name:"Burger",
        cooktime:'10-20',
        price:8,
        favourite:false,
        origins:['italy,Russia'],
        stars:4.5,
        imageUrl:'/assets/food-4.jpg',
        tags:['pizza']

      },
      {
        id:5,
        name:"Shawarma",
        cooktime:'10-20',
        price:9,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food-5.jpg',
        tags:['lunch']

      },
      {
        id:6,
        name:"Fruits",
        cooktime:'10-20',
        price:20,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food-6.jpg',
        tags:['chinese']

      },
      {
        id:7,
        name:"Desi ",
        cooktime:'10-20',
        price:2,
        favourite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'/assets/food-7.jpg',
        tags:['italian']

      },
    ];


  
  getAllTag():tag[]{
      return[
        {name:'All',count:7},
        {name:'fastfood',count:2},
        {name:'pizza',count:2},
        {name:'lunch',count:3},
      ]

  }
  getAllDropdowntag():idropdownoption[]{
    return[
      {'key':1,'label':'All'},{'key':2,'label':'fastfood'},{'key':3,'label':'pizza'},{'key':4,'label':'lunch'}
    ]

  }
  getAllFoodByTags(tag:string):Foods[] {
    console.log(tag)
    if(tag=='All'||tag=='all'){
      return this.getAll
    }
    else{
      console.log('In Else')
      return this.getAll.filter(food=>food.tags.includes(tag))

    }

    /*return tag=='All'?
    this.getAll:this.getAll.filter(food=>food.tags?.includes(tag))*/

  }
  getFoodbyid(id:number){
   // console.log(this.getAll.filter(food=>food.id===id))
    const [s] = this.getAll.filter(food=>food.id===id)
    return s
      
  }

}
