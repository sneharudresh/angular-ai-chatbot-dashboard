import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,Chatbot,
    Header,
    Sidebar,
    Home,
    About,
    Services,
    Contact,RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isSidebarOpen = false;
  activeSection = 'home';

  ngOnInit(): void {
    // Open sidebar by default on desktop
    if (window.innerWidth >= 768) {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar toggled:', this.isSidebarOpen);
  }

  onSectionChange(section: string): void {
    this.activeSection = section;
    
    // Auto-close on mobile only
    if (window.innerWidth < 768) {
      this.isSidebarOpen = false;
    }
  }
}