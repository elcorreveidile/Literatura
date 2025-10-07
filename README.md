# Literatura
Repositorio para las apps y webs de los cursos de literatura española para estudiantes de español como lengua extranjera.
# Literatura española hasta el siglo XVIII (web simple)

Sitio **estático** en un solo archivo `index.html` + PDFs en `materials/`.

## Qué hay aquí
- 5 secciones: Edad Media, Renacimiento, Cervantes, Barroco, Ilustración.
- Descargas (PDF): syllabus, programa, actividades y unidades.
- Botón “Foro” que abre el foro del curso.
- Miniserie: formulario que genera y descarga guiones (.txt).

## Cómo publicar con GitHub Pages
1. Sube `index.html` a la raíz del repo.
2. Crea carpeta `materials/` y sube tus PDFs con estos nombres:
   - 1. Edad Media.pdf
   - 2. Renacimiento.pdf
   - 3. Cervantes.pdf
   - 4. Barroco.pdf
   - 5. Ilustracion.pdf
   - syllabus.pdf
   - programa-detallado.pdf
   - actividades.pdf
3. En **Settings → Pages**: Branch = `main`, Folder = `/ (root)`, **Save**.
4. Tu web aparecerá en `https://TU-USUARIO.github.io/TU-REPO/`.

## Personalizar
- En `index.html`, busca la sección **Foro** y cambia la URL:
  ```html
  <a class="btn primary" href="https://tu-moodle/curso/foro" ...>Abrir foro del curso</a>
