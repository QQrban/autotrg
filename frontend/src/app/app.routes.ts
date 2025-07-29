import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Authentication } from './pages/authentication/authentication';
import { CardDetailsPage } from './pages/card-details-page/card-details-page';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'auth', component: Authentication },
  { path: 'cards/:id', component: CardDetailsPage },
  { path: 'settings', component: Settings },
];
