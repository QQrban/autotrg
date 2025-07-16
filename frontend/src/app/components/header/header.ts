import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private appState = inject(AppState);
  readonly isSellerMode = computed(() => this.appState.isSellerMode());

  constructor(private router: Router) {}

  toggle() {
    this.appState.toggleSellerMode();
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
