import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 services = [
    {
      icon: 'trending_up',
      title: 'Analytics',
      description: 'Data-driven insights to power your business decisions.'
    },
    {
      icon: 'people',
      title: 'Consulting',
      description: 'Expert guidance for sustainable growth.'
    },
    {
      icon: 'settings',
      title: 'Automation',
      description: 'Streamline operations with smart automation.'
    }
  ];
}