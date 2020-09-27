import { Component, Input } from '@angular/core';
import { routes } from 'app/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() title: string;

  @Input() localesList: { location: string; label: string }[] = [];

  menuItems = routes.filter((menu) => menu.data).map((item) => ({ path: item.path, name: item.data.name }));
}
