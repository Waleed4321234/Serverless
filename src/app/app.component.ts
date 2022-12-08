import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { map,startWith,from } from 'rxjs';
const CACHE_KEY='httprepocache';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*repos:any
  constructor(private http:HttpClient){

    const path='https://api.github.com/search/repositories?q=angular';
    this.repos=http.get<any>(path).pipe(
      map(data=>data.items)
    )
    this.repos.subscribe((next: any)=>{
      localStorage[CACHE_KEY]=JSON.stringify(next)
    })
    this.repos=this.repos.pipe(startWith(JSON.parse(localStorage[CACHE_KEY]||'[]')))



  }*/
  constructor(public authservice:AuthService){}
  title = 'food';
}
