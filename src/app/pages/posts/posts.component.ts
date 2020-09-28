import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { PostsService, IPost } from 'app/services/posts/posts.service';

interface IPosts extends IPost {
  cols?: number;
  rows?: number;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.3s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.3s ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class PostsComponent {
  postsData: IPosts[];

  showUserID = {};

  setData = (data: IPost[]) => {
    this.postsData = data.map((item) => ({ ...item, cols: 1, rows: 1 }));
  };

  getData = () => this.postsData;

  toggleId = (postId: number) => {
    this.showUserID[postId] = !this.showUserID[postId];
  };

  constructor(private posts: PostsService) {
    this.posts
      .getData()
      .toPromise()
      .then((res) => {
        return this.setData(res);
      });
  }
}
