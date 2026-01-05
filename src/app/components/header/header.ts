/* ============================================ */
/* FILE: src/app/components/header/header.component.ts - REPLACE */
/* ============================================ */

import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSnackBarModule],
 
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    @Output() toggleSidebar = new EventEmitter<void>();

 constructor(private snackBar: MatSnackBar) {}

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  onSettingsClick(): void {
    this.snackBar.open('Settings feature coming soon!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['settings-snackbar']
    });
  }

  onDashboardClick(): void {
    this.snackBar.open('Dashboard feature coming soon!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  onAccountClick(): void {
    this.snackBar.open('Account feature coming soon!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }}