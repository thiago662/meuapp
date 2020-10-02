import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  dados: Post = {
    nome: "",
    titulo: "",
    subtitulo: "",
    email: "",
    mensagem: ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createPost(): void {
    console.log(this.dados);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
