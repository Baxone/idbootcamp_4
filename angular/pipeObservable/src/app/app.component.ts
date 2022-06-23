import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arrPost: Observable<Post[]> | any;
  arrPostPromises: Promise<Post[]> | any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.arrPost = this.postsService.getAll();
    this.arrPostPromises = this.postsService.getAllPromises()
  }

}
