# 📝 To Do List con Local Storage y Modo Día/Noche

Aplicación web sencilla de **lista de tareas (To Do List)** desarrollada con **HTML, CSS y JavaScript**.  
Permite crear, completar y eliminar tareas dinámicamente, además de cambiar entre **modo día y modo noche**.

---

## 📌 Descripción

Este proyecto implementa una lista de tareas donde el usuario puede:

- Agregar ítems de forma dinámica.  
- Marcar tareas como completadas y moverlas a una sección separada.  
- Eliminar tareas cuando lo desee.  
- Alternar entre dos estilos de visualización: **modo día** y **modo noche**.  

Es un ejercicio práctico para afianzar el manejo de **DOM**, **eventos** y **manipulación dinámica de estilos** en JavaScript.

---

## ✨ Funcionalidades

- ✅ **Agregar tareas** mediante el botón `+` o la tecla Enter.  
- 📌 **Organización automática**:  
  - Las tareas pendientes aparecen en la sección *To Do*.  
  - Las completadas se mueven a la sección *Completed*.  
- ❌ **Eliminar tareas** con un botón específico en cada ítem.  
- 🌙 **Cambiar estilos**: botón para alternar entre **Modo Día** y **Modo Noche** cambiando la hoja de estilos activa.  
- ⚡ **Interfaz dinámica** sin recargar la página.  

---

## 🛠️ Tecnologías usadas

- **HTML5** — estructura de la aplicación.  
- **CSS3** — estilos (modo día y modo noche).  
- **JavaScript (ES6)** — manejo de eventos, creación de elementos dinámicos y lógica del modo de estilos.  
- **Bootstrap (JS Bundle)** — librería incluida desde CDN para utilidades adicionales.  

---

## 🚀 Instalación / Uso

1. Clona el repositorio:  

   ```bash
   git clone https://github.com/tu-usuario/tu-repo-todolist.git


Abre el archivo index.html en tu navegador.

Empieza a añadir tareas y prueba las funciones:

Escribe en el input y presiona + o Enter.

Marca/desmarca tareas como completadas.

Borra tareas innecesarias.

Cambia entre Modo Día y Modo Noche con el botón superior.

ToDoList/

│

├── index.html              # Página principal

├── css/

│   ├── style.css           # Estilos por defecto (modo noche)

│   └── style-dia.css       # Estilos para modo día

├── js/

│   └── main.js             # Lógica de la aplicación

└── README.md               # Documentación del proyecto


📖 Aprendizajes clave

Manipulación del DOM con createElement, appendChild y querySelector.

Uso de event listeners (click, keydown, change).

Implementación de un modo de estilos dinámico alternando href de la hoja de estilos.

Organización de tareas en diferentes contenedores (To Do vs Completed).

🤝 Contribuciones

Si deseas mejorar este proyecto:

Haz un fork del repositorio.

Crea una nueva rama:
git checkout -b feature/nueva-funcionalidad

Realiza los cambios y haz commit:
git commit -m "Agregada nueva funcionalidad"

Sube los cambios:
git push origin feature/nueva-funcionalidad

Abre un Pull Request.

📜 Licencia

Este proyecto está bajo la licencia MIT.
Libre para uso educativo y personal.

