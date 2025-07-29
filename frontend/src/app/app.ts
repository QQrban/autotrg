import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStateService } from './services/authService/authService';
import { Header } from './components/header/header';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
  private readonly auth = inject(AuthStateService);

  protected readonly isLoggedIn = computed(() => this.auth.isLoggedIn());
}
