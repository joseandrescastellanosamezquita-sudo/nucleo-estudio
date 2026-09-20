# Actualización de grupos privados v6

Reemplaza en la raíz del repositorio estos cuatro archivos:

- `index.html`
- `app.js`
- `social.js`
- `styles.css`

No reemplaces `config.js`: debe conservar la URL y la clave publicable de tu proyecto Supabase.

Después del despliegue, la sección **Grupo de estudio** permitirá:

- Crear un grupo privado.
- Copiar su código real de ocho caracteres.
- Unirse mediante el código de otra persona.
- Publicar preguntas visibles para los integrantes del grupo.
- Actualizar el listado de aportes compartidos.

Los identificadores `?v=6` fuerzan al navegador a cargar esta versión y evitan reutilizar módulos anteriores desde la caché.
