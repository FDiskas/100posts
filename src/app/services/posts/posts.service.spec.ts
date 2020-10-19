import { HttpBackend } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService, HttpBackend],
    });

    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should return an Observable<any>', () => {
      const dummyData = [{ body: 'test', id: 1, title: 'string', userId: 1 }];

      service.getData().subscribe((data) => {
        expect(data).toEqual(dummyData);
      });
    });
  });
});
