# 🌙 To-Do List App

Una aplicación de lista de tareas con diseño espacial nocturno, construida con React y Vite.

## ✨ Características

- **Agregar tareas**: Escribe y presiona Enter o haz clic en "Agregar"
- **Marcar completadas**: Haz clic en el texto de la tarea para alternar su estado
- **Eliminar tareas**: Botón "Eliminar" en cada tarea
- **Persistencia**: Los datos se guardan automáticamente en localStorage
- **Diseño espacial**: Fondo azul marino con efectos de nubes y destellos

## 🚀 Instalación

```bash
cd todo-app
npm install
npm run dev
```

## 🎨 Diseño

- **Fondo**: Azul marino oscuro (#0b0d1a)
- **Contornos**: Morado (#a45fff)
- **Efectos**: Nubes, destellos y capybara decorativo
- **Responsive**: Centrado y adaptable

## 📁 Estructura

```
src/
├── App.jsx          # Componente principal
├── App.css          # Estilos
├── main.jsx         # Punto de entrada
└── assets/          # Imágenes
    ├── nube.png
    ├── nube2.png
    ├── destello.png
    ├── destello_nube.png
    └── capybara.png
```

## 🔧 Funcionalidades Técnicas

### Estado
- `tasks`: Array de tareas con id, text y completed
- `inputValue`: Valor del campo de entrada

### Persistencia
```javascript
// Cargar al iniciar
useEffect(() => {
  const savedTasks = localStorage.getItem('todoTasks')
  if (savedTasks) setTasks(JSON.parse(savedTasks))
}, [])

// Guardar automáticamente
useEffect(() => {
  localStorage.setItem('todoTasks', JSON.stringify(tasks))
}, [tasks])
```

### Operaciones
- **addTask()**: Agrega nueva tarea con ID único (timestamp)
- **toggleTask(id)**: Alterna estado completado/pendiente
- **deleteTask(id)**: Elimina tarea por ID

## 🎯 Uso

1. **Agregar**: Escribe en el input y presiona Enter o "Agregar"
2. **Completar**: Haz clic en el texto de la tarea
3. **Eliminar**: Haz clic en el botón "Eliminar"
4. **Persistencia**: Los datos se mantienen al recargar la página

## 🛠️ Tecnologías

- React 18
- Vite
- CSS3 con efectos visuales
- localStorage para persistencia

## 📱 Responsive

La aplicación está optimizada para diferentes tamaños de pantalla con elementos centrados y diseño adaptable.