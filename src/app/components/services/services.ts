import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
services = [
    {
      title: 'Business Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform. We help you understand trends, predict outcomes, and make informed decisions.'
    },
    {
      title: 'Strategic Consulting',
      description: 'Our experienced consultants work closely with you to develop and execute strategies that align with your business objectives and market opportunities.'
    },
    {
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions. Reduce costs, improve efficiency, and free up your team to focus on high-value activities.'
    }
  ];
}
