import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    // Este componente actúa como contenedor (Layout) para el módulo admin
    loadComponent: () => import('../../features/admin/components/admin-layout/admin-layout').then(c => c.AdminLayout),
    children: [
      {
        path: 'hoteles',
        title: 'Gestión de Hoteles',
        loadComponent: () => import('../../features/admin/pages/hotel-list/hotel-list').then(c => c.HotelList)
      },
      {
        path: 'hoteles/nuevo',
        title: 'Registrar Hotel',
        loadComponent: () => import('../../features/admin/components/hotel-form/hotel-form').then(c => c.HotelForm)
      },
      {
        path: 'hoteles/editar/:id',
        title: 'Editar Hotel',
        loadComponent: () => import('../../features/admin/components/hotel-form/hotel-form').then(c => c.HotelForm)
      },
      {
        path: 'habitaciones/:hotelId',
        title: 'Gestión de Habitaciones',
        loadComponent: () => import('../../features/admin/components/room-management/room-management').then(c => c.RoomManagement)
      },
      {
        path: 'reservas/:hotelId',
        title: 'Ver Reservas',
        loadComponent: () => import('../../features/admin/pages/booking-list/booking-list').then(c => c.BookingList)

      },
      {
        path: '',
        redirectTo: 'hoteles',
        pathMatch: 'full'
      }
    ]
  }
];
