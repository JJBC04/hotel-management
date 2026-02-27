# Hotel Management System - Prueba Técnica UltraGroup

¡Hola! Soy el desarrollador de esta solución. He diseñado este proyecto como respuesta a la prueba técnica para la vacante de **Frontend Developer**, enfocado en cumplir con los requerimientos indicados utilizando buenas practicas y codigo de alta calidad.

## 🚀 Decisiones Técnicas y Arquitectura

Para este desarrollo, mi prioridad fue crear una base de código limpia y moderna. Estas son las razones detrás de mis elecciones:

- **Angular + Signals**: Utilice versión más reciente de Angular (21), aprovechando los **Signals** para la gestión del estado. Eleji este enfoque para que la aplicación sea mas atomica y escalable, tambien para evitar hacer renderizados innecesarios.
- **Arquitectura Modular**: Organicé el proyecto siguiendo una separación clara de responsabilidades en carpetas de `core` (servicios y lógica global), `features` (módulos de negocio como Admin y Booking) y `shared` (componentes reutilizables).
- **Mocking con Interceptores**: Para cumplir con el requerimiento de la API simulada, implementé un `HttpInterceptor`. Este intercepta las peticiones salientes y devuelve respuestas basadas en un objeto de datos simulado (`db.mocks.ts`), lo que permite que la aplicación sea totalmente funcional sin necesidad de un backend externo real durante la revisión.
- **Formularios Reactivos**: Utilicé `ReactiveFormsModule` para gestionar las validaciones obligatorias de hoteles, habitaciones y huéspedes, asegurando que los datos cumplan con los criterios antes de ser procesados.

## 📈 Enfoque en Escalabilidad

Pensando en un entorno empresarial real, la aplicación está preparada para crecer:

- **Lazy Loading**: Las rutas principales de Administración y Reservas se cargan de forma que solo se llaman los componentes cuando sea necesario. Esto optimiza el tiempo de carga al utilizar solo el código necesario para la sección que el usuario está visitando.
- **Persistencia en LocalStorage**: Incluí una capa de persistencia básica en los mocks que utiliza `localStorage`. Esto permite que los cambios realizados (como crear un nuevo hotel) persistan incluso si se refresca el navegador, simulando el comportamiento de una base de datos real.
- **Componentes Standalone**: Al usar componentes independientes, se facilita la reutilización y el testeo unitario, además de reducir la complejidad de la configuración de módulos.

## 🛠️ Instrucciones de Ejecución

Para ejecutar el proyecto localmente, se debe de tener instalado [Node.js](https://nodejs.org/) y la [Angular CLI](https://angular.io/cli).

1.  **Clonar el repositorio**:
    ```bash
    git clone [https://github.com/JJBC04/hotel-management]
    cd hotel-management
    ```
2.  **Instalar las dependencias**:
    ```bash
    npm install
    ```
3.  **Iniciar el servidor de desarrollo**:
    ```bash
    ng serve
    ```
    Navega a `http://localhost:4200/` para ver la aplicación.

## ☁️ Despliegue y Pruebas

Si deseas probar la aplicación desplegada, puedes acceder a través del siguiente enlace:

---

- **Perfil Agencia**: Accede para gestionar el catálogo de hoteles y habitaciones.
- **Perfil Viajero**: Realiza búsquedas por ciudad y completa el flujo de reserva con datos de huéspedes.

---

_Desarrollado con ❤️ para el proceso de selección de UltraGroup._
