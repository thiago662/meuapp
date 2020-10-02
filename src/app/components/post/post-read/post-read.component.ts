import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit(): void {
  }

}
