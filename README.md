# Sistema de Cobro

Sistema de Cobro es una aplicación de gestión para administrar cobros de
vigilancia vecinal. Este proyecto está dividido en dos partes: **Backend
(Node.js + Express + Prisma)** y **Frontend (React + Vite +
TypeScript)**. La arquitectura está diseñada bajo principios de
separación de responsabilidades, escalabilidad y buenas prácticas
modernas de desarrollo.

------------------------------------------------------------------------

## 🚀 Primer Sprint --- Entrega Funcional

Este sprint incluye:

------------------------------------------------------------------------

### ✔️ 1. Backend funcional (Node.js + Express + Prisma)

Implementación de una API REST con las siguientes características:

-   **Rutas organizadas por módulo** (vecinos y cobros).
-   **Controladores** para manejar la lógica de solicitudes.
-   **Servicios** como capa de negocio intermedia.
-   **Consultas Prisma (queries)** para acceder a la base de datos.
-   **Base de datos** configurada con Prisma.
-   **Seed automático** ejecutado mediante `npx prisma migrate reset`.
-   **Manejo de variables de entorno** con `dotenv`.
-   **Archivo `.env.example`** incluido para fácil configuración.

#### Endpoints principales:

  Método   Ruta         Descripción
  -------- ------------ ---------------------------
  GET      `/vecinos`   Obtener todos los vecinos
  POST     `/vecinos`   Registrar un nuevo vecino
  GET      `/cobros`    Obtener todos los cobros
  POST     `/cobros`    Registrar un nuevo cobro

------------------------------------------------------------------------

### ✔️ 2. Frontend funcional (React + Vite + TypeScript)

-   Vista con el listado de vecinos conectada al backend.
-   Vista con el listado de cobros.
-   Formularios básicos para registrar nuevos datos.
-   Consumo de la API mediante `fetch`.
-   **Archivo `.env.example`** para variables del cliente.

------------------------------------------------------------------------

## 📦 Tecnologías usadas

### 🔹 Backend

-   Node.js\
-   Express\
-   Prisma ORM\
-   SQLite o MySQL (según configuración)\
-   Dotenv\
-   Faker.js (para seed de datos)

### 🔹 Frontend

-   React\
-   Vite\
-   TypeScript

------------------------------------------------------------------------

## 📂 Estructura del proyecto

    backend/
     ├── src/
     │   ├── routes/
     │   ├── controllers/
     │   ├── services/
     │   ├── queries/
     │   └── app.js
     ├── prisma/
     │   ├── schema.prisma
     │   └── seed.js
     ├── .env
     ├── .env.example
     └── package.json

    frontend/
     ├── src/
     │   ├── components/
     │   ├── pages/
     │   └── services/
     ├── .env
     ├── .env.example
     └── package.json

------------------------------------------------------------------------

## 🔧 Configuración y ejecución

------------------------------------------------------------------------

### 🔹 Backend

1.  Instalar dependencias:

```bash
yarn install
```

2.  Copiar variables de entorno:

```bash
cp .env.example .env
```

3.  Crear y migrar la base de datos:

```bash
npx prisma migrate dev --name init
```

4.  Ejecutar servidor:

```bash
yarn dev
```

5.  Reset + seed automático:

```bash
npx prisma migrate reset
```

------------------------------------------------------------------------

### 🔹 Frontend

1.  Instalar dependencias:

```bash
yarn install
```

2.  Copiar variables de entorno:

```bash
cp .env.example .env
```

3.  Ejecutar el servidor de desarrollo:

```bash
yarn dev
```

------------------------------------------------------------------------

## 🌐 Repositorio

Puedes consultar el proyecto completo aquí:

👉 **https://github.com/PabloVReyes/SistemaCobro/tree/develop**

------------------------------------------------------------------------

## 🧠 Conceptos aplicados en este sprint

-   Programación modular y arquitectura por capas\
-   Abstracción, separación de responsabilidades y reutilización\
-   Serialización y manejo de datos en JSON\
-   Patrón controlador--servicio--repositorio\
-   Refactorización para mejorar legibilidad\
-   Uso de ORM moderno (Prisma)\
-   Manejo de variables de entorno con Dotenv\
-   Automatización de datos de prueba (Faker + Seed)\
-   Integración de Frontend y Backend mediante API REST

------------------------------------------------------------------------

## 📌 Estado del sprint

✔ Backend y Frontend conectados\
✔ CRUD básico funcional\
✔ API estable\
✔ Interfaz inicial funcional

Próximos pasos: - Sistema de autenticación\
- Panel de administración\
- Reportes y estadísticas\
- Mejoras visuales del frontend

------------------------------------------------------------------------

## 📝 Autor

Pablo Vázquez Reyes\
Desarrollo de Software --- Primer Sprint\
2025
