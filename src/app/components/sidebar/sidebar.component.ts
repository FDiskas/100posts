import { Component, Input } from '@angular/core';
import { routes } from 'app/app-routing.module';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() title: string;

  menuItems = routes.filter((menu) => menu.data).map((item) => ({ path: item.path, name: item.data.name }));
}
