![logo_upc](img/upc_logo_200x200_jao73r.png)
## Guía de Uso
- **Navegación**: LibreLocus está diseñado para ofrecer una experiencia de usuario intuitiva y fácil de usar. A continuación, se describen las principales secciones y funcionalidades de la aplicación:
- **Página Principal**: En la página principal, puedes explorar la colección de libros disponibles y recibir recomendaciones personalizadas basadas en tus intereses y hábitos de lectura. 
- **Buscar**: Utiliza la barra de búsqueda para encontrar libros por título, autor o género. La función de búsqueda es rápida y eficiente, permitiéndote acceder a la información que necesitas en cuestión de segundos.
- **Detalle del Libro**: Al hacer clic en un libro, serás llevado a una página de detalles donde podrás ver información adicional sobre el libro, incluyendo la sinopsis, opiniones de otros usuarios y detalles del autor.
- **Mapa de Establecimientos**: Utiliza el mapa interactivo para encontrar librerías y puntos de venta cercanos.
- **Perfil del Usuario**: En tu perfil de usuario, puedes gestionar tus preferencias de lectura y configuraciones personales.    

## Fuentes de Google
En este proyecto se utilizan fuentes de Google para mejorar la tipografía y apariencia visual de la landing page. Google Fonts ofrece una amplia variedad de fuentes web gratuitas que se pueden integrar fácilmente en cualquier proyecto web.

### Implementación de Fuentes de Google
Para agregar una fuente de Google, se incluye un enlace en el `<head>` del archivo `index.html`:
```html <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">```
En el archivo CSS, la fuente Roboto es utilizada en este ejemplo por su apariencia moderna y legible.

## Implementación de Botones
Los botones se estilizan en el archivo styles.css. Este estilo proporciona un botón verde con texto blanco, bordes redondeados y un tamaño de fuente legible.
- **background-color**: #4CAF50;
- **padding**: 15px 32px;
- **text-align**: center;
- **display**: inline-block;
- **font-size**: 16px;
- **margin**: 4px 2px;
- **border-radius**: 8px;

## Estructura del Menú
Los menús de navegación son esenciales para la usabilidad de la landing page, permitiendo a los usuarios acceder fácilmente a diferentes secciones del sitio.
En el archivo HTML, se define la estructura del menú a través de una lista no ordenada.
- **Home**: Inicio
- **Features**: Caracteristicas
- **Testimonials**: Testimonios
- **Download**: Descargar
- **Suscribe**: Suscribirse

## Análisis de Diseño

#### Principios de la Arquitectura:
1. **Organización**: El contenido está organizado en secciones claras y lógicas, como "Inicio", "Características", "Testimonios", "Descargar" y "Suscribirse". Esto permite a los usuarios navegar fácilmente por la página y encontrar la información relevante sin esfuerzo.
2. **Etiqueta**: Se utilizan etiquetas claras y descriptivas para los enlaces y botones, lo que ayuda a los usuarios a entender rápidamente su propósito. Por ejemplo, los botones de descarga están claramente etiquetados como "Descargar en Google Play" y "Descargar en App Store".
3. **Navegación**: La estructura del menú de navegación facilita el acceso rápido a las diferentes secciones de la página. Además, la inclusión de enlaces permite a los usuarios desplazarse directamente a la sección deseada.

#### Heurísticas de Diseño:
1. **Visibilidad del estado del sistema**: La landing page proporciona feedback inmediato a las acciones del usuario, como al hacer clic en los botones de descarga o enviar el formulario de suscripción.
2. **Relación entre el sistema y el mundo real**: El lenguaje utilizado en la página es claro y conciso, alineándose con el entendimiento del usuario. Los iconos y gráficos utilizados también son familiares y reconocibles.
3. **Control y libertad del usuario**: Los usuarios pueden navegar libremente entre las secciones de la página y regresar fácilmente a la sección anterior mediante enlaces de navegación claramente visibles.
4. **Consistencia y estándares**: La página utiliza un diseño coherente en todas las secciones, con una paleta de colores, tipografía y estilo visual uniforme. Los elementos interactivos, como botones y enlaces, tienen un aspecto consistente y predecible.
5. **Prevención de errores**: La página está diseñada para minimizar la posibilidad de errores del usuario.

#### Principios de Diseño Inclusivo:
1. **Perceptible**: La información y los elementos interactivos están diseñados para ser percibidos claramente por todos los usuarios. Esto incluye un contraste adecuado de colores, textos legibles y uso de etiquetas descriptivas para elementos visuales.
2. **Operable**: Todos los controles interactivos, como botones y enlaces, son fácilmente accesibles y utilizables mediante diferentes dispositivos de entrada, incluyendo teclados y tecnologías de asistencia.
3. **Comprensible**: El contenido está escrito en un lenguaje simple y directo, y la disposición visual sigue una estructura lógica y predecible. Los usuarios pueden entender rápidamente cómo navegar por la página y realizar acciones.
4. **Robusto**: La página está diseñada para ser compatible con una amplia gama de tecnologías y dispositivos, asegurando que todos los usuarios, independientemente de la plataforma que utilicen, puedan acceder y usar la página sin problemas.
5. **Contraste de Colores**: Se ha asegurado un contraste adecuado entre el texto y los fondos para mejorar la legibilidad para usuarios con discapacidades visuales.
6. **Responsive Design**: El diseño responsivo asegura que la página se adapte y funcione correctamente en dispositivos de diferentes tamaños y resoluciones, mejorando la experiencia de usuario en móviles y tabletas.

## Licencias
Este proyecto está bajo la Licencia de código abierto llamado MIT. Para más detalles, consulta el archivo `License`.
   
## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejorar la landing page.
