import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../Shared/models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private authservice:AuthService,private router:Router) { }
  i = localStorage.getItem('Users');
  Users:User[] =  this.i ? JSON.parse(this.i): [];
  
  //user:any
  user!:User
  form=new FormGroup({
    username:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])),
    password:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]))
  })
  ngOnInit(): void {
  }
  onloginsubmit(){
    let i=0
    console.log('in submit')
    this.user={
      username:this.form.get('username')?.value,
      password:this.form.get('password')?.value

    }
    console.log(this.i)
    console.log('Array'+this.Users)
   // this.Users.push(this.user)
    //console.log(this.user)
   // localStorage.setItem('Users',JSON.stringify (this.Users))
   if(this.user.username=='admin' &&this.user.password=='12345')
   {
     this.authservice.isadmin=true
   }
   else if(this.user.username!='admin')
   {
     this.authservice.isadmin=false
   }
   
   this.Users.forEach(element => {
    if(element.username==this.user.username)
    {
      i=1
      this.authservice.getUser()
      this.authservice.isloggedin=true
    }
    
   }
   );
   if(i==0){
    this.authservice.isloggedin=false
    alert('user not exists')
    setTimeout(() => { 
      console.log('logged in')
      this.router.navigate(['/login'])
    }, 1500);

   }
    
    
  }

}
