import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostReadComponent } from './components/post/post-read/post-read.component';

const routes: Routes = [
  {
    path: "",
    component: PostReadComponent
  },
  {
    path: "create",
    component: PostCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
