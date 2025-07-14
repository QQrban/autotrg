import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { name, email, password });
  }
}
