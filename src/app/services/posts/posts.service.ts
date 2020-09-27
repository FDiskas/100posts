import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService, IConfig } from 'app/services/config/config.service';

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  config: IConfig;

  constructor(private http: HttpClient, private configService: ConfigService) {}

  getData() {
    // return this.http.jsonp<IPost[]>(this.configService.postsApiUrl, 'callback');
    return this.http.get<IPost[]>(this.configService.postsApiUrl);
  }
}
