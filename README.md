# Nexo Estudio UVG — estudio científico personalizado

Aplicación web para **Química, Física, Biología y Cálculo**. Combina diagnósticos por macrotema, recuperación activa, práctica intercalada, calendario personal, preparación automática para exámenes, niveles RPG y grupos privados.

## Funciones principales

- Registro e inicio de sesión con correo y contraseña mediante Supabase Auth.
- Progreso, agenda, planes y preferencias guardados por usuario.
- RLS: cada cuenta solo puede leer y modificar su propia fila de aprendizaje.
- Tareas, proyectos y exámenes; los exámenes usan una señal visual distinta.
- Plan regresivo para exámenes de los cuatro cursos compatibles.
- Materias externas se guardan sin generar contenido que la plataforma no conoce.
- Cada macrotema contiene una sección teórica y otra práctica, ambas con documento inicial.
- Diagnósticos y sesiones mixtas con distribución 50 % teórica y 50 % práctica.
- Arena con 162 preguntas: 81 teóricas y 81 prácticas.
- Grupos privados con código de invitación y lista verificable de integrantes.
- Tema claro y oscuro.

## Publicar en GitHub Pages

El flujo `.github/workflows/pages.yml` publica `main`. En **Settings → Pages**, elige **GitHub Actions**. La URL de este proyecto es:

```text
https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/
```

## Activar acceso por correo y contraseña

La interfaz ya está programada. Solo requiere un proyecto de Supabase; no necesita Google Cloud ni OAuth:

1. Abre [Supabase Dashboard](https://supabase.com/dashboard) y crea un proyecto.
2. Ejecuta todo `supabase-schema.sql` en **SQL Editor**.
3. En **Authentication → Sign In / Providers → Email** conserva activado **Email**.
4. Decide la política de confirmación:
   - Producción pública: activa **Confirm email**.
   - Prueba privada: puedes desactivarla para entrar inmediatamente, aceptando que no se verifica que el correo pertenezca al usuario.
5. En **Authentication → URL Configuration** configura:
   - Site URL: `https://joseandrescastellanosamezquita-sudo.github.io/nucleo-estudio/`
   - Redirect URL adicional: la misma URL.
6. Abre **Connect** en el proyecto —o **Settings → API Keys**— y copia la **Project URL** y la **Publishable key** (`sb_publishable_...`).
7. En `config.js`, pega esos dos valores:

```js
export const NUCLEO_CONFIG = {
  supabaseUrl: "https://TU-PROYECTO.supabase.co",
  supabaseAnonKey: "sb_publishable_TU_CLAVE_PUBLICA",
  requireAccount: true
};
```

La clave **publishable** es pública por diseño; la privacidad depende de las políticas RLS incluidas. Nunca publiques una clave **secret**, `service_role` ni contraseñas en el repositorio. El nombre interno `supabaseAnonKey` se conserva por compatibilidad, pero admite la clave publishable actual.

Con `requireAccount: true`, el sitio permanece bloqueado si faltan la URL o la clave pública. Cuando ambas están configuradas, toda persona debe crear una cuenta o iniciar sesión antes de entrar.

El formulario solicita **nombre visible, correo y contraseña**. El nombre identifica al usuario dentro de Nexo Estudio UVG; el correo funciona como identificador privado de acceso y permite recuperar la cuenta. Un sistema de solo alias y contraseña perdería una vía segura de recuperación y exigiría mantener un servidor adicional para resolver alias, por lo que no se recomienda para esta primera versión.

## Tutorial interactivo

El recorrido guiado se muestra automáticamente la primera vez que cada cuenta entra en la plataforma. Explica la navegación, las rutas teóricas y prácticas, la agenda, los diagnósticos, los grupos y el sistema de progreso. Puede repetirse en cualquier momento con el botón **?** de la barra superior.

Supabase usa el correo como identificador nativo para autenticación por contraseña. Un acceso mediante un nombre de usuario arbitrario requeriría construir y mantener un servidor de autenticación adicional; no es apropiado guardar contraseñas directamente desde GitHub Pages.

Documentación oficial: [Password-based Auth](https://supabase.com/docs/guides/auth/passwords) y [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security).

### Google como opción futura

Google OAuth puede reducir contraseñas olvidadas, pero añade Google Cloud, credenciales OAuth y verificación de redirecciones. No es necesario para la primera versión. Si luego se habilita, usa la guía oficial: [Sign in with Google](https://supabase.com/docs/guides/auth/social-login/auth-google).

## Temario UVG

Los macrotemas y cronogramas fueron actualizados con los programas UVG 2026 proporcionados para **Química 2, Física 1, Biología General y Cálculo 1**. La plataforma muestra las semanas, fechas, contenidos y evaluaciones legibles en esos documentos. Las fechas dependientes del grupo deben confirmarse con el docente.

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
