import { Hotel, Habitacion, Reserva } from '../../shared/interfaces/model';
const DATA_KEY = 'ultra_group_db';

// Datos de ejemplo para el modelo de Hotel
export const MOCK_HOTEL: Hotel = {
  id: 1,
  nombre: 'Gran Oasis Resort',
  ubicacion: 'Cartagena, Colombia',
  estaHabilitado: true,
  habitaciones: []
};

// Datos de ejemplo para el modelo de Habitación
export const MOCK_HABITACION: Habitacion = {
  id: 101,
  hotelId: 1,
  costoBase: 250000,
  impuestos: 47500, // Ejemplo: 19% IVA
  tipo: 'Suite Presidencial',
  ubicacion: 'Piso 5, Vista al Mar',
  estaHabilitada: true
};

// Datos de ejemplo para el modelo de Reserva y Huésped
export const MOCK_RESERVA: Reserva = {
  id: 5001,
  hotelId: 1,
  habitacionId: 101,
  fechaEntrada: '2024-12-20',
  fechaSalida: '2024-12-25',
  huespedes: [
    {
      nombreCompleto: 'Juan Pérez',
      fechaNacimiento: '1990-05-15',
      genero: 'Masculino',
      tipoDocumento: 'Cédula de Ciudadanía',
      numeroDocumento: '123456789',
      email: 'juan.perez@example.com',
      telefono: '+57 300 123 4567'
    }
  ]
};

// Función para persistir cambios cada vez que se haga un POST/PUT/DELETE
export const saveToLocalStorage = (data: any) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
};

// Estructura completa para simular la base de datos
export const DB_MOCK = {
  hoteles: [
    { ...MOCK_HOTEL, habitaciones: [MOCK_HABITACION] }
  ],
  reservas: [MOCK_RESERVA]
};
