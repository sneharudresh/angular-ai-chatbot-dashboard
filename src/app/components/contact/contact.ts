import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
 contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      details: ['contact@businesshub.com', 'support@businesshub.com']
    },
    {
      icon: 'phone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Monday - Friday: 9 AM - 6 PM EST']
    },
    {
      icon: 'location_on',
      title: 'Address',
      details: ['123 Business Street', 'New York, NY 10001']
    }
  ];
}
