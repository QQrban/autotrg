import { Component, computed, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { AppState } from '../../services/app-state';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-dashboard',
  imports: [Header, Banner],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class Dashboard {
  private appState = inject(AppState);
  readonly isSeller = computed(() => this.appState.isSellerMode());
}
