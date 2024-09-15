# SilverBridge Foundation

## Organización del Proyecto

### 1. Estructura del Repositorio

Para organizar el proyecto, sigue la siguiente estructura en el repositorio:

```plaintext
SilverBridge-Foundation/
├── docs/               # Documentación (propuestas, actas de reunión, etc.)
├── admin/              # Parte administrativa (cronogramas, actas, etc.)
├── frontend/           # Código del frontend con Next.js
├── backend/            # Código del backend con Laravel y conexión a la base de datos SQLite
├── design/             # Archivos de diseño y prototipos de Figma
├── devops/             # Scripts de CI/CD y configuración de infraestructura
├── assets/             # Imágenes, íconos, multimedia para la página web
├── schedules/          # Cronogramas y planificación de actividades
├── LICENSE             # Archivo de licencia (MIT, GPL, etc.)
└── README.md           # Instrucciones del proyecto
```

- **docs/**: Documentos como propuestas, informes, actas de reuniones, etc.
- **admin/**: Cronogramas, listas de tareas y otros archivos administrativos.
- **frontend/**: Código del frontend utilizando Next.js.
- **backend/**: Código del backend con Laravel y SQLite.
- **design/**: Archivos y prototipos de Figma.
- **devops/**: Scripts y configuraciones de CI/CD e infraestructura.
- **assets/**: Imágenes y multimedia.
- **schedules/**: Planificación de actividades y cronogramas.

### 2. Roles y Responsabilidades

#### 1. **Emily Morales (DevSecOps)**
   - **Tecnologías Clave**: CI/CD, infraestructura, seguridad.
   - **Responsabilidades**:
     - Configuración de **CI/CD** con **GitHub Actions**.
     - Escaneo de seguridad para el código de Laravel y Next.js.
     - Despliegue de **Next.js** en **Vercel** y **Laravel** en **Heroku**.
     - Asegurar la integridad de la base de datos **SQLite**.
   - **GitHub**:
     - Workflows para pruebas, despliegue y seguridad.
     - Configuración de **Vercel** y **Heroku**.
     - Implementación de escáneres de seguridad como **Snyk**.

#### 2. **Jhuomar Barría (Fullstack Developer)**
   - **Tecnologías Clave**: **Next.js**, **Laravel**, **SQLite**, **Shadcn**.
   - **Responsabilidades**:
     - Desarrollar la estructura de la aplicación (frontend con **Next.js** y backend con **Laravel**).
     - Integración de **Next.js** con **Laravel** y **SQLite**.
     - Implementación de **Shadcn** y **Tailwind CSS**.
   - **GitHub**:
     - Arquitectura modular y limpia.
     - Supervisar la integración entre frontend y backend.

#### 3. **Geremi Tejeira (Frontend Developer)**
   - **Tecnologías Clave**: **Next.js**, **Tailwind CSS**, **Shadcn**, **Figma**.
   - **Responsabilidades**:
     - Desarrollar la UI con **Next.js** y componentes de **Shadcn**.
     - Diseño responsive con **Tailwind CSS**.
   - **GitHub**:
     - Mantener los componentes frontend.
     - Asegurar la implementación de los diseños de **Figma**.

#### 4. **Yin Ko (DataOps)**
   - **Tecnologías Clave**: **SQLite**, DataOps.
   - **Responsabilidades**:
     - Configurar y gestionar **SQLite**.
     - Optimización de consultas a la base de datos.
   - **GitHub**:
     - Scripts de migración y configuración de la base de datos.

#### 5. **Henry Rodríguez (Backend Jr.)**
   - **Tecnologías Clave**: **Laravel**, **SQLite**, APIs.
   - **Responsabilidades**:
     - Desarrollar el backend con **Laravel**.
     - Crear APIs para el consumo por parte de **Next.js**.
   - **GitHub**:
     - Crear endpoints para manejar contenido dinámico.
     - Asegurar la integración correcta con **SQLite**.

### 3. Flujo de Trabajo en GitHub

1. **Ramas por Funcionalidad**:
   - **frontend/geremi**: Desarrollo del frontend.
   - **backend/henry**: Lógica del servidor y APIs en **Laravel**.
   - **fullstack/jhuomar**: Supervisión de la integración frontend-backend.
   - **devops/emily**: Scripts de CI/CD y configuración de seguridad.
   - **data/yin**: Gestión de **SQLite**.

2. **Pull Requests (PRs)**:
   - Cada miembro creará **pull requests** desde su rama.
   - **Revisores**:
     - **Emily** para seguridad e infraestructura.
     - **Jhuomar** para la integración general.
     - **Geremi** para el diseño frontend.

3. **CI/CD con GitHub Actions**:
   - **Pipelines** para pruebas automáticas.
   - **Despliegue**:
     - **Next.js** en **Vercel**.
     - **Laravel** en **Heroku**.
   - **Pruebas Automáticas** para mantener la estabilidad del código.

### 4. Página Web de SilverBridge

1. **Frontend**:
   - **Next.js** con **Tailwind CSS** y **Shadcn**.
   - **Figma** para los prototipos de diseño.

2. **Backend**:
   - **Laravel** como backend y APIs.
   - **SQLite** para gestionar la información (cronograma, eventos, usuarios).

3. **DevOps**:
   - Automatización del despliegue con **GitHub Actions**, **Vercel** y **Heroku**.

4. **DataOps**:
   - Gestión de **SQLite** y optimización de los datos.

### 5. Uso de GitHub Projects

Utiliza **GitHub Projects** para organizar las tareas:

- **Backlog**: Tareas pendientes.
- **In Progress**: Tareas en desarrollo.
- **Review**: Tareas a revisar.
- **Done**: Tareas completadas.

Cada tarjeta puede incluir:
- Asignado a.
- Descripción de la tarea.
- Fecha límite.
- Etiquetas como **urgente** o **en progreso**.

### 6. Sistema de Issues

Utiliza los **Issues** de GitHub para:

- Reportar problemas.
- Discutir ideas.
- Hacer seguimiento de tareas específicas.

Crea etiquetas como **administración**, **desarrollo web**, **contenido**, **diseño gráfico**, etc.

### 7. Documentación y README

Es crucial mantener una buena documentación. El archivo **README.md** debe incluir:

- **Descripción del proyecto**.
- **Instrucciones de instalación y desarrollo**.
- **Roles y contacto**.
- **Pautas de contribución**.

### 8. Desarrollo de la Página Web

Secciones clave de la página web:

1. **Inicio**: Introducción y llamado a la acción.
2. **Misión y Visión**: Principios de la fundación.
3. **Cronograma de Actividades**: Calendario o lista de eventos.
4. **Programas**: Talleres y servicios que ofrece la fundación.
5. **Donaciones y Apoyo**: Cómo contribuir.
6. **Contacto**: Información de contacto o formulario.

Tecnologías:

- **Next.js** para el frontend.
- **Laravel** para el backend.
- **GitHub Pages** como hosting (opcional).

### 9. Colaboración en GitHub

Recomendaciones para contribuciones:

- **Pull Requests** para cada contribución.
- **Branches** específicas para cada funcionalidad.
- **Code Reviews** para asegurar calidad antes de fusionar en la rama principal.

### 10. Herramientas Adicionales

- **Google Drive o Notion** para colaboración administrativa.
- **Slack o Discord** para comunicación en tiempo real.
- **Trello** como alternativa a GitHub Projects.

### Próximos Pasos

1. Crea el repositorio y organiza las carpetas.
2. Asigna roles y distribuye tareas.
3. Desarrolla contenido administrativo y sube los archivos.
4. Comienza el desarrollo de la página web y asigna tareas específicas.
```

