import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '100posts';

  loading = false;

  constructor(private location: Location) {}

  localesList = [
    { location: this.location.prepareExternalUrl('/en-US'), label: 'English' },
    { location: this.location.prepareExternalUrl('lt'), label: 'Lietuvių' },
  ];
}
