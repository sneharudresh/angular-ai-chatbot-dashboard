import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
 stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];
}