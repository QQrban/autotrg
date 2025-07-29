import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private apiUrl = 'http://localhost:8080/api/v2/auth/user';

  constructor(private http: HttpClient) {}

  getUserById(id: number) {
    return this.http.get<UserType>(`${this.apiUrl}/${id}`);
  }
}
