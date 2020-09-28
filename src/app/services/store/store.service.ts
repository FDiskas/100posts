import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost } from 'app/services/posts/posts.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly store = new BehaviorSubject([]);

  readonly store$ = this.store.asObservable();

  get posts() {
    return this.store.getValue();
  }

  set posts(value: IPost[]) {
    this.store.next(value);
  }
}
