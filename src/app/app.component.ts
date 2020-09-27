import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '100posts';

  loading = false;

  constructor(@Inject(DOCUMENT) private readonly document: any, private readonly locationStrategy: LocationStrategy) {}

  localesList = [
    { location: `${this.document.location.origin}${this.locationStrategy.getBaseHref()}../en-US/`, label: 'English' },
    { location: `${this.document.location.origin}${this.locationStrategy.getBaseHref()}../lt`, label: 'Lietuvių' },
  ];
}
