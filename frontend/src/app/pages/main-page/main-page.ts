import { Component, computed, inject } from '@angular/core';
import { AppState } from '../../services/appStateService/appStateService';
import { Banner } from '../../components/banner/banner';
import { Featured } from '../../components/featured/featured';

@Component({
  selector: 'app-dashboard',
  imports: [Banner, Featured],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  private appState = inject(AppState);
  readonly isSeller = computed(() => this.appState.isSellerMode());
}
