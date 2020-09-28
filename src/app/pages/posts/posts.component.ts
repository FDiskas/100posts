import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { trigger, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { PostsService, IPost } from 'app/services/posts/posts.service';
import { StoreService } from '../../services/store/store.service';

export interface IPostCard extends IPost {
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
  postsData: Observable<IPostCard[]>;

  showUserID = {};

  setData = (data: IPost[]) => {
    this.postsData = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
      map(({ matches }) => {
        if (matches) {
          return data.map((item) => ({ ...item, cols: 10, rows: 1 }));
        }

        return data.map((item) => ({ ...item, cols: 1, rows: 1 }));
      }),
    );
  };

  getData = async () => this.postsData;

  toggleId = (postId: number) => {
    this.showUserID[postId] = !this.showUserID[postId];
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private posts: PostsService,
    private store: StoreService,
  ) {
    if (!this.store.posts.length) {
      this.posts.getData().subscribe((res) => {
        this.store.posts = res;
        this.setData(res);
      });
    } else {
      this.setData(this.store.posts);
    }
  }
}
