import { JsonpClientBackend, HttpBackend } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // Use the HttpBackend instead of the JsonpClientBackend
      // https://github.com/angular/angular/issues/20878
      providers: [PostsService, { provide: JsonpClientBackend, useExisting: HttpBackend }],
    });

    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getData', () => {
    it('should return an Observable<any>', () => {
      const dummyData = [{ body: 'string', id: 1, title: 'string', userId: 1 }];

      service.getData().subscribe((data) => {
        expect(data).toEqual(dummyData);
      });
      const req = httpMock.expectOne((request) => request.url === service.config.postsApiUrl);
      expect(req.request.method).toBe('JSONP');
      req.flush(dummyData);
    });
  });
});
