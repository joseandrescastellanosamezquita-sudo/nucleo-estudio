# Núcleo — entorno de estudio científico

Aplicación web local-first para **Química, Física y Biología**, diseñada alrededor de recuperación activa, práctica espaciada, intercalado y elaboración causal. La versión 2 añade progresión RPG y grupos de estudio privados.

## Publicación mediante GitHub Pages

El flujo `.github/workflows/pages.yml` publica automáticamente el sitio cuando se envía código a `main`. En el repositorio, abre **Settings → Pages → Source** y selecciona **GitHub Actions**. La URL resultante seguirá el patrón:

```text
https://USUARIO.github.io/nucleo-estudio/
```

La versión pública es estática. El RPG individual y el progreso local funcionan sin servidor.

## Mecánicas RPG

- Experiencia y niveles vinculados a recuperación activa y concentración.
- Misiones con criterios verificables y recompensas reclamables.
- Fragmentos para futuras personalizaciones, sin ventajas académicas.
- Logros y racha de estudio.
- La plataforma no recompensa simplemente abrirla o dejar una pestaña activa.

## Grupos privados

La interfaz incluye:

- Salas de estudio con temporizador y presencia en tiempo real.
- Retos cooperativos semanales.
- Clasificación entre amigos basada en actividad académica.
- Preguntas, explicaciones y votos de utilidad dentro del grupo.
- Enfrentamientos científicos entre personajes basados en precisión y retroalimentación.

Sin backend muestra explícitamente datos ficticios. Para activar cuentas reales:

1. Crea un proyecto de Supabase.
2. Ejecuta `supabase-schema.sql` en el editor SQL.
3. Copia la URL del proyecto y la clave pública `anon` en `config.js`.
4. En Realtime Settings, desactiva acceso público para exigir los controles de los canales privados.
5. Configura la URL de GitHub Pages como URL permitida de redirección en Auth.

Las políticas RLS restringen perfiles, sesiones, clasificaciones y presencia a integrantes del mismo grupo. **Nunca** se debe colocar una clave `service_role`, un token de Canvas o cualquier secreto en `config.js`.

Los duelos no recompensan velocidad. Cada turno exige una respuesta y muestra la explicación correspondiente. En producción, la selección de preguntas y la corrección deben ejecutarse en una función del servidor; el cliente no debe recibir anticipadamente la respuesta correcta.

## Ejecutar

Requiere Node.js 18 o posterior y no instala dependencias.

```bash
npm start
```

Abre `http://localhost:4173`. Sin configuración externa funciona en modo demostración y guarda el progreso en `localStorage`.

## Conectar Canvas LMS

1. Copia `.env.example` a `.env` o define las variables en el entorno de despliegue.
2. Configura `CANVAS_BASE_URL` con el dominio HTTPS institucional.
3. Configura `CANVAS_API_TOKEN` con un token OAuth o token personal autorizado.
4. Exporta las variables antes de iniciar. Node no carga `.env` automáticamente:

```bash
set -a
source .env
set +a
npm start
```

La credencial se usa únicamente en `server.mjs`. No se envía al navegador. El servidor consulta cursos activos, tareas y módulos mediante la API REST de Canvas, sigue la paginación y devuelve al cliente solo los datos académicos necesarios.

> Para un despliegue multiusuario, sustituye el token global por OAuth 2.0 por usuario y una sesión cifrada del lado del servidor. No publiques un token personal en Git ni en código frontend.

## Importación JSON

El diálogo de Canvas permite importar un respaldo con esta estructura:

```json
{
  "courses": [
    {
      "id": "curso-1",
      "name": "Química General",
      "assignments": [
        { "id": "tarea-1", "title": "Equilibrio", "dueAt": "2026-09-25T18:00:00Z", "points": 10 }
      ],
      "modules": []
    }
  ]
}
```

## Límites conocidos

- La clasificación de asignaturas usa palabras clave del nombre del curso; puede ampliarse en `subjectFor()`.
- Canvas aporta contenido y fechas. La generación automática de preguntas desde archivos o páginas requiere una fase posterior con extracción de contenido, revisión humana y un servicio de IA.
- El planificador actual ordena por vencimiento. Una versión institucional debería incluir carga estimada, horario disponible y desempeño por concepto.

## Fundamento

- Cepeda, N. J., et al. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354
- Huang, R., Ritzhaupt, A. D., Sommer, M., Zhu, J., Stephen, A., Valle, N., Hampton, J., & Li, J. (2020). The impact of gamification in educational settings on student learning outcomes: A meta-analysis. *Educational Technology Research and Development, 68*, 1875–1901. https://doi.org/10.1007/s11423-020-09807-z
- Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying. *Science, 331*(6018), 772–775. https://doi.org/10.1126/science.1199327
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. *Instructional Science, 35*, 481–498. https://doi.org/10.1007/s11251-007-9015-8
- Instructure. (2026). *Canvas LMS REST API documentation*. https://developerdocs.instructure.com/services/canvas
