import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '100posts';

  loading = false;

  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'lt', label: 'Lietuvių' },
  ];
}
