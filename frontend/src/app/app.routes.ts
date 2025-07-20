import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Authentication } from './pages/authentication/authentication';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'auth', component: Authentication },
];
