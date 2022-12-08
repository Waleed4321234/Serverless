import { Directive,Input,OnInit,TemplateRef,ViewContainerRef } from '@angular/core';
import { AuthService } from './services/auth.service';
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{


  @Input() set appUnless(role:any)
  {
    if(this.authservice.hasrole(role))
    this.viewcontainerref.createEmbeddedView(this.templateref)
    else{
      this.viewcontainerref.clear()
    }
  

  }
  constructor(private templateref:TemplateRef<any>,private viewcontainerref:ViewContainerRef,private authservice:AuthService) 
  {
    



  }
  ngOnInit(): void {
    //show the content



    //hide the content
  }

}
