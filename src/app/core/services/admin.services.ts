import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel, Habitacion, Reserva } from '../../shared/interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);
  private apiUrl = '/api'; // URL base para el mock API

  // Gestión de Hoteles
  getHoteles(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hoteles`);
  }

  crearHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.apiUrl}/hoteles`, hotel);
  }

  actualizarEstadoHotel(id: number, estaHabilitado: boolean): Observable<any> {
    return this.http.patch(`${this.apiUrl}/hoteles/${id}`, { estaHabilitado });
  }

  //Gestión de Habitaciones
  getHabitaciones(hotelId: number): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(`${this.apiUrl}/habitaciones?hotelId=${hotelId}`);
  }

  crearHabitacion(habitacion: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(`${this.apiUrl}/habitaciones`, habitacion);
  }

  //Gestión de Reservas
  getReservasPorHotel(hotelId: number): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.apiUrl}/reservas?hotelId=${hotelId}`);
  }
}
