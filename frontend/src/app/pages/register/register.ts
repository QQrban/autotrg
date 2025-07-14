import { Component, computed } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  constructor(private auth: Auth, private router: Router) {}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  message: string | null = null;
  isError = false;

  register() {
    if (this.form.invalid) {
      console.log('something is wrong');
      return;
    }

    const { name, email, password } = this.form.value;

    this.auth.register(name ?? '', email ?? '', password ?? '').subscribe({
      next: (res: any) => {
        this.isError = false;
        this.form.reset();
        this.message = 'Account created! You can now';
      },
      error: (err: HttpErrorResponse) => {
        this.isError = true;
        this.message = err.error?.message || 'Something went wrong :(';
      },
    });
  }

  onClose() {
    this.message = null;
  }
}
