export interface Hotel {
  id: number;
  nombre: string;
  ubicacion: string;
  estaHabilitado: boolean;
  habitaciones: Habitacion[];
}

export interface Habitacion {
  id: number;
  hotelId: number;
  costoBase: number;
  impuestos: number;
  tipo: string;
  ubicacion: string; // Ej: "Piso 2"
  estaHabilitada: boolean;
}

export interface Reserva {
  id?: number;
  habitacionId: number;
  hotelId: number;
  fechaEntrada: string;
  fechaSalida: string;
  huespedes: Huesped[];
}

export interface Huesped {
  nombreCompleto: string;
  fechaNacimiento: string;
  genero: string;
  tipoDocumento: string;
  numeroDocumento: string;
  email: string;
  telefono: string;
}
