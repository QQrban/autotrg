import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private apiUrl = 'http://localhost:8080/api/v2/auth';

  private _token = signal<string | null>(sessionStorage.getItem('token'));

  readonly isLoggedIn = computed(() => !!this._token());

  showLogin = signal(true);

  setLoginMode(isLogin: boolean) {
    this.showLogin.set(isLogin);
  }

  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password });
  }

  login(identifier: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { identifier, password });
  }

  logout() {
    sessionStorage.removeItem('token');
    this._token.set(null);
  }

  getToken() {
    return this._token;
  }
}
