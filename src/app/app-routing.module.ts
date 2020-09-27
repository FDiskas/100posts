import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      name: 'Home',
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
      name: 'Posts',
    },
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
