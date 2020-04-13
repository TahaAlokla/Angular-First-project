import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string ='https://jsonplaceholder.typicode.com/posts';
 private posts:any;

  constructor(private http : HttpClient) { }
  getposts(){
    this.http.get(this.url).subscribe(response=>{
      console.log(response);
      this.posts =response;
      

    })
  }
}
