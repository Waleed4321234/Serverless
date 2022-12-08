import { Injectable } from '@angular/core';
import { User } from 'src/app/Shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getAllUser:User[]=[]
}
