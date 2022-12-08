import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup,Validators , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Shared/models/User';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  i = localStorage.getItem('Users');
  Users:User[] =  this.i ? JSON.parse(this.i): [];
  user!:User
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  form=new FormGroup({
    email: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
  
    ])),
    username: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
  
    ])),
    password: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
  
    ])),
    confirm: new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
  
    ])),

  });
  onRegisterSubmit(){
    let j=0;
    console.log('in submit')
    this.user={
      username:this.form.get('username')?.value,
      password:this.form.get('password')?.value

    }
    this.Users.forEach(element => {
      if(element.username==this.user.username){
        alert('Name Already exists')

        j=1;
        this.router.navigate([''])
      }
      
    });
    console.log(this.i)
    console.log('Array'+this.Users)
    if(j==0){
      this.Users.push(this.user)
      //console.log(this.user)
      localStorage.setItem('Users',JSON.stringify (this.Users))
      setTimeout(() => { 
        console.log('logged in')
        this.router.navigate(['/login'])
      }, 1500);
    }
   
    
  }

}
