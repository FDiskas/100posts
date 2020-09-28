import { HttpClient } from '@angular/common/http';
import { IConfig } from 'app/services/config/config.service';

export const loadConfig = (http: HttpClient, config: IConfig) => {
  return () => {
    return new Promise((resolve: (a: boolean) => void): void => {
      http
        .get('assets/config.json')
        .toPromise()
        .then((x: IConfig) => {
          // eslint-disable-next-line no-param-reassign
          config.postsApiUrl = x.postsApiUrl;
          resolve(true);
        });
    });
  };
};
