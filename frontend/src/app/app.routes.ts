import { Routes } from '@angular/router';
import { Authentication } from './pages/authentication/authentication';
import { Dashboard } from './pages/main-page/main-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Authentication },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
];
