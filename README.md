# Node API Architecture

Backend API base diseñada para proyectos reales en **Node.js**, con una **arquitectura limpia por capas**, pensada para escalabilidad, mantenibilidad y buenas prácticas profesionales.

Este repositorio sirve como **plantilla base** y como **proyecto de portafolio**, demostrando organización de código, separación de responsabilidades y configuración correcta del entorno.

---

## 🚀 Stack Tecnológico

* **Node.js**
* **Express.js**
* **JavaScript (ES6+)**
* **dotenv** (variables de entorno)
* **cors**
* **nodemon** (entorno de desarrollo)

---

## 🧱 Arquitectura

El proyecto está estructurado siguiendo un enfoque **por capas**, separando responsabilidades de forma clara:

```
src/
 ├─ routes/        # Definición de rutas HTTP
 ├─ controllers/   # Controladores (request / response)
 ├─ services/      # Lógica de negocio
 ├─ models/        # Modelos de datos
 ├─ database/      # Conexiones y configuración de BD
 ├─ middlewares/   # Middlewares personalizados
 ├─ utils/         # Utilidades reutilizables
 ├─ config/        # Configuración general
 ├─ scripts/       # Scripts auxiliares
 ├─ views/         # Recursos HTML (si aplica)
 ├─ tests/         # Pruebas
 ├─ app.js         # Configuración de Express
 └─ server.js      # Punto de arranque del servidor
```

Esta estructura facilita:

* Escalar el proyecto
* Mantener código limpio
* Integrar nuevas funcionalidades sin romper las existentes

---

## ▶️ Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone git@github.com:ChristianCamiloSanabria/node-api-architecture.git
cd node-api-architecture
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
PORT=3000
```

### 4️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
```

La API quedará disponible en:

```
http://localhost:3000
```

---

## 📡 Endpoint inicial

### GET /

Respuesta de prueba para validar que la API está activa:

```json
{
  "status": "OK",
  "message": "Node API Architecture running"
}
```

---

## 🎯 Objetivo del proyecto

Este proyecto fue creado con el objetivo de:

* Servir como **base reutilizable** para APIs Node.js
* Mostrar **buenas prácticas de arquitectura backend**
* Funcionar como **proyecto demostrativo de portafolio**
* Facilitar la integración de bases de datos, autenticación y servicios externos

---

## 📌 Próximas mejoras

* Módulos de ejemplo (users / health)
* Integración con PostgreSQL
* Validaciones de datos
* Autenticación (JWT)
* Pruebas unitarias
* Dockerización

---

## 👤 Autor

**Christian Camilo Sanabria**
Ingeniero de Sistemas y Computación
Backend Developer | Node.js | APIs REST | PostgreSQL

🔗 GitHub: [https://github.com/ChristianCamiloSanabria](https://github.com/ChristianCamiloSanabria)

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y profesionales.
