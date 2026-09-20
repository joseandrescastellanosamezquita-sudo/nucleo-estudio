# Núcleo — paquete limpio para GitHub Pages

Esta carpeta contiene únicamente los archivos necesarios para publicar Núcleo y conectar cuentas privadas mediante correo y contraseña.

## Archivos

- `index.html`: estructura de la aplicación.
- `styles.css`: diseño claro y oscuro.
- `app.js`: interfaz, agenda, diagnósticos, planes, RPG y arena.
- `learning.js`: programas UVG 2026 y banco de preguntas.
- `social.js`: registro, inicio de sesión, recuperación y sincronización privada.
- `config.js`: URL y clave pública de Supabase.
- `supabase-schema.sql`: tablas y políticas de privacidad.

## 1. Configurar Supabase

1. En Supabase, abre **SQL Editor → New query**.
2. Copia y ejecuta todo `supabase-schema.sql`.
3. En **Authentication → Sign In / Providers**, activa **Email**. Google no es necesario.
4. En **Authentication → URL Configuration**, utiliza como Site URL y Redirect URL:

   `https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/`

5. Obtén la URL en **Integrations → Data API** y la clave en **Settings → API Keys → Publishable key**.
6. Abre `config.js` y reemplaza los dos valores vacíos:

```js
export const NUCLEO_CONFIG = {
  supabaseUrl: "https://TU-PROYECTO.supabase.co",
  supabaseAnonKey: "sb_publishable_TU_CLAVE_PUBLICA",
  requireAccount: true
};
```

Nunca coloques una clave `sb_secret_`, `service_role` ni una contraseña en `config.js`.

## 2. Subir a GitHub

1. Elimina los archivos anteriores del repositorio.
2. Abre esta carpeta `nucleo-estudio-listo`.
3. Selecciona y sube los ocho archivos que contiene. No subas la carpeta como un nivel adicional y no subas el ZIP.
4. En GitHub Pages conserva **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. Espera el despliegue y abre:

   `https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/`

6. Recarga con `Ctrl + F5` o prueba en una ventana de incógnito.

La pantalla correcta solicita nombre visible, correo y contraseña; no muestra acceso mediante Google.
