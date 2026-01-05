import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
@Input() isOpen = true;
  @Output() sectionChange = new EventEmitter();
  
  activeSection = 'home';

  menuItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'info' },
    { id: 'services', label: 'Services', icon: 'trending_up' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
  ];

  selectSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.sectionChange.emit(sectionId);
  }
}
