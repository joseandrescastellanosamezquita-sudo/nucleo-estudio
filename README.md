# Núcleo — estudio científico personalizado

Aplicación web para **Química, Física, Biología y Cálculo**. Combina diagnósticos por macrotema, recuperación activa, práctica intercalada, calendario personal, preparación automática para exámenes, niveles RPG y grupos privados.

## Funciones principales

- Cuenta de Google mediante Supabase Auth.
- Progreso, agenda, planes y preferencias guardados por usuario.
- RLS: cada cuenta solo puede leer y modificar su propia fila de aprendizaje.
- Tareas, proyectos y exámenes; los exámenes usan una señal visual distinta.
- Plan regresivo para exámenes de los cuatro cursos compatibles.
- Materias externas se guardan sin generar contenido que la plataforma no conoce.
- Diagnóstico general o por macrotema, sin porcentajes inventados.
- Arena con 48 preguntas barajadas entre cuatro asignaturas.
- Tema claro y oscuro.

## Publicar en GitHub Pages

El flujo `.github/workflows/pages.yml` publica `main`. En **Settings → Pages**, elige **GitHub Actions**. La URL de este proyecto es:

```text
https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/
```

## Activar acceso con Google y guardado privado

La interfaz ya está programada, pero Google no puede autenticar usuarios hasta que se conecte un proyecto de Supabase:

1. Crea un proyecto en Supabase.
2. Ejecuta todo `supabase-schema.sql` en **SQL Editor**.
3. En **Authentication → URL Configuration** configura:
   - Site URL: `https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/`
   - Redirect URL adicional: la misma URL.
4. En Google Cloud crea un cliente OAuth de tipo **Web application**.
5. En **Authorized JavaScript origins** agrega `https://joseandrescastellanosamezquita-sudo.github.io`.
6. En **Authorized redirect URIs** agrega el callback que Supabase muestra en **Authentication → Providers → Google**; tiene la forma `https://TU-PROYECTO.supabase.co/auth/v1/callback`.
7. Copia el Client ID y Client Secret a ese proveedor de Google en Supabase y actívalo.
8. En `config.js`, pega únicamente la Project URL y la clave pública `anon`:

```js
export const NUCLEO_CONFIG = {
  supabaseUrl: "https://TU-PROYECTO.supabase.co",
  supabaseAnonKey: "TU-CLAVE-ANON-PUBLICA",
  requireAccount: true
};
```

La clave `anon` es pública por diseño; la privacidad depende de las políticas RLS incluidas. Nunca publiques `service_role`, Client Secret de Google ni contraseñas en el repositorio.

Sin URL/clave de Supabase, el sitio permite modo local para revisión. Cuando están configuradas y `requireAccount` es `true`, Google se vuelve requisito de entrada.

Documentación oficial: [Google Auth con Supabase](https://supabase.com/docs/guides/auth/social-login/auth-google) y [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security).

## Temario UVG

El temario incluido funciona como base editable de ciencias y Cálculo I. UVG publica pensums y nombres de cursos, pero el programa detallado de cada sección no está disponible públicamente de forma equivalente a Canvas. Por eso la aplicación no afirma copiar el Canvas de una persona. Para ajustar exactamente temas, orden y alcance, edita `learning.js` usando el programa oficial entregado por el docente.

## Ejecutar localmente

Requiere Node.js 18 o posterior:

```bash
npm start
```

Abre `http://localhost:4173`.

## Fundamento de aprendizaje

- Cepeda, N. J., et al. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354
- Huang, R., et al. (2020). The impact of gamification in educational settings. *Educational Technology Research and Development, 68*, 1875–1901. https://doi.org/10.1007/s11423-020-09807-z
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science, 35*, 481–498. https://doi.org/10.1007/s11251-007-9015-8
