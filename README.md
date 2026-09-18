# Plataforma de Evaluación Diagnóstica: Despeje de Fórmulas

Plataforma interactiva para la evaluación de **Despeje de Fórmulas en Física y Matemáticas** con **40 preguntas** tipo opción múltiple, capas de seguridad anti-fraude y exportación de reportes en PDF.

## 🚀 Características
- **40 Preguntas de Despeje:** Cinemática, Dinámica, Energía, Fluidos, Electricidad, Termodinámica, Álgebra y Geometría.
- **Renderizado Matemático KaTeX:** Fórmulas con calidad tipográfica impecable.
- **Seguridad Kiosk Anti-Fraude:**
  - Obligatoriedad de Pantalla Completa.
  - Detección de pérdida de foco y cambio de pestañas (máximo 3 advertencias).
  - Bloqueo de clic derecho, copiar/pegar y teclas de inspección (`F12`, `Ctrl+Shift+I`).
- **Persistencia en LocalStorage:** Respaldo continuo contra recargas accidentales.
- **Reporte PDF:** Calificación instantánea sobre 10.00 puntos y descarga del certificado en PDF.

## 📁 Estructura del Proyecto
- `index.html`: Estructura y Vistas de la aplicación.
- `index.css`: Estilos visuales y reglas tipográficas.
- `index.js`: Banco de 40 preguntas, KaTeX, temporizador y capas de seguridad.
- `README.md`: Documentación del proyecto.