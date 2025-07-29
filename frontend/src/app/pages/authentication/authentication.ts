import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthStateService } from '../../services/authService/authService';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.scss',
})
export class Authentication {
  constructor(public authState: AuthStateService, private router: Router) {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/dashboard']);
    }
  }

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  message: string | null = null;
  isError = false;

  register() {
    if (this.registerForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const { name, email, password } = this.registerForm.value;

    this.authState.register(name ?? '', email ?? '', password ?? '').subscribe({
      next: (res: any) => {
        this.isError = false;
        this.registerForm.reset();
        this.message = 'Account created! You can now';
      },
      error: (err: HttpErrorResponse) => {
        this.isError = true;
        this.message = err.error?.message || 'Something went wrong :(';
      },
    });
  }

  loginForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const { identifier, password } = this.loginForm.value;

    this.authState.login(identifier ?? '', password ?? '').subscribe({
      next: (res: any) => {
        const token = res.token;
        if (token) {
          sessionStorage.setItem('token', token);
        }
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        this.isError = true;
        this.message = err.error?.message || 'Something went wrong :(';
      },
    });
  }

  setLoginView() {
    this.authState.showLogin.set(true);
    this.onClose();
  }

  toggle() {
    this.authState.showLogin.update((v) => !v);
  }

  onClose() {
    this.message = null;
  }
}
