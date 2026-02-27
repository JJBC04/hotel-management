// src/app/features/admin/components/admin-layout/admin-layout.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatIconModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayout {
  navLinks = [
    { label: 'Hoteles', link: 'hoteles', icon: 'hotel' },
    { label: 'Habitaciones', link: 'habitaciones', icon: 'bed' },
    { label: 'Reservas', link: 'reservas', icon: 'book_online' }
  ];
}
