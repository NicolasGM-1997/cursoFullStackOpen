flowchart TD
  A[Usuario] -->|Entrar a la Pagina| B(Abrir página SPA)
  B -->|Cargar HTML, JS, CSS| C{¿Recursos cargados correctamente?}
  C -->|Sí| D(Mostrar Pagina)
  D -->|Esperar Eventos de usuario| E(fin)
  C -->|No| H(Mostrar mensaje de error)