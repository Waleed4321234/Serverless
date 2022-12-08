import { Component, OnInit } from '@angular/core';
import { idropdownoption, tag } from '../Shared/models/tag';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:idropdownoption[]=[]
  selectedvalue:number=1;
  constructor(private fs:FoodService,private router:Router) { }

  ngOnInit(): void {
    //this.tags=this.fs.getAllTag();

    this.tags=this.fs.getAllDropdowntag()
    console.log(this.tags)
    console.log(this.fs.getAllTag());
  }
  onSelect(){
    this.tags.forEach(element => {
      if(element.key==this.selectedvalue)
      {
        this.router.navigateByUrl('/tag/'+element.label)
      }
      
    });


  }

}
