# JS-Radar-Interactivo
Práctica de JavaScript Vanilla: modificación dinámica de estilos CSS en el DOM, validación de rangos numéricos y posicionamiento espacial.

# El Radar Interactivo 📡

Tercer mini-proyecto de mi práctica intensiva de **JavaScript Vanilla**. Este proyecto se centra en la modificación de propiedades CSS en tiempo real y la validación de rangos numéricos.

## 📌 ¿Qué hace este proyecto?
Presenta un panel de control donde el usuario ingresa coordenadas espaciales (Top y Left). El sistema valida que las coordenadas estén dentro de un rango seguro (0-100 para Top, 0-400 para Left) y, si son correctas, desplaza un elemento visual por la pantalla hacia esa posición exacta.

## 🛠️ Conceptos y Tecnologías aplicadas:
* **Manipulación de Estilos (DOM):** Uso de las propiedades `style.top` y `style.left` para alterar la posición absoluta de un elemento HTML desde JavaScript.
* **Operadores Lógicos Avanzados:** Implementación del operador lógico OR (`||`) para evaluar múltiples condiciones de desborde de rango en una sola línea de ejecución.
* **Template Literals:** Uso de literales de plantilla para renderizar las coordenadas actualizadas en la interfaz de manera limpia y eficiente.
* **Conversión de Tipos:** Manejo de datos de entrada nativos (Strings) convertidos a números enteros (`parseInt`) para realizar comprobaciones matemáticas, y luego re-convertidos a medidas CSS (`px`).

---
*Desarrollado para dominar la interacción en tiempo real entre JS y CSS.*