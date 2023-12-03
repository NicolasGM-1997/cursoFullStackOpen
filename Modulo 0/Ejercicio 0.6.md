flowchart TD
  A[Usuario] -->|Enviar Nota| B(Escribir nota)
  B -->|Oprimir boton| C{¿Validar Nota?}
  C -->|Sí| D{Procesar solicitud}
  D -->|Guardar nota| E(Guardar en el servidor)
  E -->|Respuesta| F(Actualizar DOM)
  F -->|Recargar solo la parte que tuvo un cambio| H(Fin)
  C -->|No| G(Mostrar error en el navegador)