import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IConfig } from 'app/services/config/config.service';

export const loadConfig = (http: HttpClient, config: IConfig) => {
  return () => {
    return new Promise((resolve: (a: boolean) => void): void => {
      http
        .get('assets/config.json')
        .pipe(
          map((x: IConfig) => {
            // eslint-disable-next-line no-param-reassign
            config.postsApiUrl = x.postsApiUrl;
            resolve(true);
          }),
        )
        .subscribe();
    });
  };
};
