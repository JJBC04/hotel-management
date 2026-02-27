import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  private router = inject(Router);
  appTitle = 'UltraGroup Hotels';
  currentProfile = 'Viajero'; // Perfil por defecto

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateProfileLabel(event.urlAfterRedirects);
    });

    this.updateProfileLabel(this.router.url);
  }

  private updateProfileLabel(url: string) {
    if (url.includes('/admin')) {
      this.currentProfile = 'Agencia (Admin)';
    } else {
      this.currentProfile = 'Viajero';
    }
  }
}
