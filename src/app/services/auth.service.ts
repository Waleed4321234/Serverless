import { NgLocaleLocalization } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { retryWhen } from 'rxjs';
import { User } from '../Shared/models/User';

@Injectable({
  providedIn: 'root' //  module, componnet
})
export class AuthService {
  isadmin=false
  isloggedin=false
  constructor(private router: Router) { }

  getUser() {
    let local = localStorage.getItem('Users')
    
    let users: User[] = typeof (local) == 'string' ? JSON.parse(local) : local
    let las=users.pop()
    console.log('in users'+las?.username)
    console.log('in get')
    
    if (this.isadmin==false) {
      setTimeout(() => { 
        console.log('logged in')
        this.router.navigate(['/home'])
      }, 1500);
      
      return true
    }
    else {
      this.router.navigate(['/dashboard'])
      console.log('In false of get user')
      return false
    }



  }
  hasrole(role: any): boolean {
   /* let local = localStorage.getItem('Users')
    
    let users: User[] = typeof (local) == 'string' ? JSON.parse(local) : local
    let las=users.pop()
    console.log("in role"+las?.username)*/
    return this.isadmin ? true : false



  }
}
