import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../../../../core/services/admin.services';
import { Hotel } from '../../../../shared/interfaces/model';

@Component({
  selector: 'app-hotel-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  templateUrl: './hotel-form.html',
  styleUrl: './hotel-form.scss'
})
export class HotelForm implements OnInit {
  private fb = inject(FormBuilder);
  private adminService = inject(AdminService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Signals para control de estado
  loading = signal(false);
  isEditMode = signal(false);
  hotelId = signal<number | null>(null);

  hotelForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    ubicacion: ['', [Validators.required]],
    estaHabilitado: [true]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.hotelId.set(+id);
      this.loadHotelData(+id);
    }
  }

  loadHotelData(id: number): void {
    this.loading.set(true);
    //Buscar el hotel por ID para cargar los datos en el formulario
    this.adminService.getHoteles().subscribe({
      next: (hoteles) => {
        const hotel = hoteles.find(h => h.id === id);
        if (hotel) {
          this.hotelForm.patchValue(hotel);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit(): void {
    if (this.hotelForm.invalid) return;

    this.loading.set(true);
    const hotelData: Hotel = {
      ...this.hotelForm.value,
      id: this.hotelId() || 0,
      habitaciones: []
    };

    const request = this.isEditMode()
      ? this.adminService.actualizarEstadoHotel(hotelData.id, hotelData.estaHabilitado) // Ejemplo con PATCH existente
      : this.adminService.crearHotel(hotelData);

    request.subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/admin/hoteles']);
      },
      error: () => this.loading.set(false)
    });
  }
}
