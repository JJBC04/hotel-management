import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    //Búsqueda de hotel (Ciudad, Fecha entrada, Fecha salida)
    loadComponent: () => import('../../features/booking/components/search/search').then(c => c.Search),
    title: 'Buscador de Hoteles'
  },
  {
    path: 'hotel/:id',
    //Selección de hotel y ver habitaciones disponibles
    loadComponent: () => import('../../features/booking/components/hotel-detail/hotel-detail').then(c => c.HotelDetail),
    title: 'Detalle del Hotel'
  },
  {
    path: 'reservar/:hotelId/:roomId',
    //Formulario de reserva y datos del huésped
    loadComponent: () => import('../../features/booking/components/reservation-form/reservation-form').then(c => c.ReservationForm),
    title: 'Completar Reserva'
  }
];
