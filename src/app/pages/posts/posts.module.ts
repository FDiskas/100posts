import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule, MatGridListModule, MatCardModule, MatMenuModule],
  providers: [],
})
export class PostsModule {}
