import { Component, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [MatInputModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  label = input('');
}
