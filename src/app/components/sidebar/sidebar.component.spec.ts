import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import '@angular/localize/init';
import { routes } from 'app/app-routing.module';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/pages/welcome/welcome.component';
import { APP_BASE_HREF } from '@angular/common';
import { RedirectGuardComponent } from 'app/services/redirect/RedirectGuard';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SidebarComponent, WelcomeComponent, RedirectGuardComponent],
        imports: [
          BrowserAnimationsModule,
          NoopAnimationsModule,
          LayoutModule,
          MatButtonModule,
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatToolbarModule,
          RouterModule,
          MatMenuModule,
          RouterModule.forRoot(routes),
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    // shallow = new Shallow(MyComponent, MyModule);
    fixture = TestBed.createComponent(SidebarComponent);

    component = fixture.componentInstance;
    component.localesList = [{ location: 'test', label: 'test' }];
    component.menuItems = [{ path: 'test', name: 'test' }];
    component.title = 'test';
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should contain menu items', () => {
    expect(component).toMatchSnapshot();
  });
});
