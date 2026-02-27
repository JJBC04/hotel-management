import { HttpInterceptorFn, HttpResponse, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { of, delay } from 'rxjs';
import { DB_MOCK } from '../mocks/db.mocks';

// Datos iniciales simulados
let mockHotels = DB_MOCK.hoteles;

export const mockApiInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const { url, method, body } = req;

  // Simulación de GET Hoteles
  if (url.endsWith('/api/hoteles') && method === 'GET') {
    return of(new HttpResponse({ status: 200, body: mockHotels })).pipe(delay(500));
  }

  // Simulación de POST (Crear Hotel)
  if (url.endsWith('/api/hoteles') && method === 'POST') {
    const newHotel = { ...(body as any), id: Math.floor(Math.random() * 1000) };
    mockHotels.push(newHotel);
    return of(new HttpResponse({ status: 201, body: newHotel }));
  }

  // Simulación de PATCH (Habilitar/Deshabilitar) [cite: 21]
  if (url.includes('/api/hoteles/') && method === 'PATCH') {
    const id = parseInt(url.split('/').pop() || '0');
    mockHotels = mockHotels.map(h => h.id === id ? { ...h, ...body as any } : h);
    return of(new HttpResponse({ status: 200, body: body }));
  }

  return next(req);
};
