import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminService } from '../../../../core/services/admin.services';
import { Hotel } from '../../../../shared/interfaces/model';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.scss'
})
export class HotelList implements OnInit {
  private adminService = inject(AdminService);

  displayedColumns: string[] = ['nombre', 'ubicacion', 'estado', 'acciones'];
  dataSource = signal<Hotel[]>([]);
  loading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.loading.set(true);
    this.adminService.getHoteles().subscribe({

      next: (hotels) => {
        this.dataSource.set(hotels); // Actualiza el signal con los datos obtenidos
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  toggleEstado(hotel: Hotel): void {
    const nuevoEstado = !hotel.estaHabilitado;
    this.adminService.actualizarEstadoHotel(hotel.id, nuevoEstado).subscribe({
      next: () => {
        // Actuliza el estado del hotel en el signal para reflejar el cambio en la UI
        this.dataSource.update(hotels =>
          hotels.map(h => h.id === hotel.id ? { ...h, estaHabilitado: nuevoEstado } : h)
        );
      }
    });
  }
}
