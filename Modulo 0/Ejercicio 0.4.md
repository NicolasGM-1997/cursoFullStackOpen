flowchart TD
  A[Usuario] -->|Enviar Nota| B(Escribir nota)
  B -->|Oprimir boton| C{¿Validar Nota?}
  C -->|Sí| D{Procesar solicitud}
  D -->|Guardar nota| E(Guardar en el servidor)
  E -->|Respuesta| F(Recargar Pagina)
  F -->|Cargar Archivos html, js, css, json| H(Fin)
  C -->|No| G(Mostrar error en el navegador)