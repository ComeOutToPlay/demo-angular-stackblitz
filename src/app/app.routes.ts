import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { loginRouteGuard } from './core/guards/login-route.guard';
import { FatherComponent } from './components/father/father.component';

export const routes: Routes = [
  {
    path: '', // Default path
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [loginRouteGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [loginRouteGuard],
  },
  {
    path: 'father',
    component: FatherComponent,
    canActivate: [loginRouteGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
