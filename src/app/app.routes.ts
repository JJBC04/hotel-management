import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/core/guards/admin.guard').then(m => m.ADMIN_ROUTES)
  },
  {
    path: 'reservas',
    loadChildren: () => import('../app/core/guards/booking.routes').then(m => m.BOOKING_ROUTES)
  },
  { path: '', redirectTo: 'reservas', pathMatch: 'full' }
];
