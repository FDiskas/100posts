import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RedirectGuardComponent } from './services/redirect/RedirectGuard';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      name: $localize`Home`,
    },
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: async () => (await import('./pages/posts/posts.module')).PostsModule,
    data: {
      name: $localize`Posts`,
    },
    pathMatch: 'full',
  },
  {
    path: 'github',
    canActivate: [RedirectGuardComponent],
    component: RedirectGuardComponent,
    data: {
      name: 'GitHub',
      externalUrl: 'https://github.com/FDiskas/100posts',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
