import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '100posts';

  loading = false;

  constructor(private readonly locationStrategy: LocationStrategy) {}

  localesList = [
    { location: `${window.document.location.origin}${this.locationStrategy.getBaseHref()}../en-US/`, label: 'English' },
    { location: `${window.document.location.origin}${this.locationStrategy.getBaseHref()}../lt`, label: 'Lietuvių' },
  ];
}
