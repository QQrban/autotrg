import { Component, signal } from '@angular/core';
import { Input } from '../../shared/input/input';

@Component({
  selector: 'app-register',
  imports: [Input],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  name = signal('');
}
