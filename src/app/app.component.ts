import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app5';
  post :any;

  constructor(private servies : PostsService){};
 
  
  ngOnInit():void{
   this.post= this.servies.getposts();
   
  }
}
