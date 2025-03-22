# Nombre: TONY MATEO
# Matricula: 23-EISN-2-044
### API TASKS

- Esta es una API simple para gestionar tareas, desarrollada con Node.js Express.

### Contenidos principales
1. Intalaciones de los compontes para correr la API. Thunder Client o Postman

2. Endpoint de la API
    1. Pagina de Bienvenida
    2. Listar tareas
    3. Crear tareas
    4. Actualizar tarea
    5. Eliminar tarea

3. Funcionamiento y sus rutas
    1. Bienvenida: https://tony-nfw6yithg-tony-mateos-projects.vercel.app
    2. Listar tarea: (Get) https://tony-nfw6yithg-tony-mateos-projects.vercel.app/tasks
    3. Crear una nueva tarea (POST) https://tony-nfw6yithg-tony-mateos-projects.vercel.app/tasks
        {
            "task":"Nueva tarea"
        }
    4. Actualizar tarea (PUT) https://tony-nfw6yithg-tony-mateos-projects.vercel.app/tasks/0 (indice)
        {
            "newTask":"Old task"
        }
    5. Eliminar tarea:(DELETE) https://tony-nfw6yithg-tony-mateos-projects.vercel.app/tasks/0 (indice)


4. Estructura del proyecto
    - index.js (puto de entrada para la aplicación)
    - package.json (dependecia y script)
    - vecel.json (configuracion para vercel)
    - .gitignore (archivo de configuracion para permitir el paso exteciones permitida)
    -  README (*documentacion del proyecto*)
