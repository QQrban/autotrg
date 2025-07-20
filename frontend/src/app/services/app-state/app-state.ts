import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  private readonly _isSellerMode = signal<boolean>(
    localStorage.getItem('isSellerMode') === 'true'
  );

  readonly isSellerMode = this._isSellerMode.asReadonly();

  toggleSellerMode() {
    const newValue = !this._isSellerMode();
    this._isSellerMode.set(newValue);
    localStorage.setItem('isSellerMode', String(newValue));
  }

  setSellerMode(value: boolean) {
    this._isSellerMode.set(value);
    localStorage.setItem('isSellerMode', String(value));
  }
}
