import { Injectable } from '@angular/core';

export interface IConfig {
  postsApiUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  postsApiUrl: string;
}
