# SistemaCobro

## Descripción
Este proyecto permite gestionar los pagos de los vecinos, emitir recibos digitales y consultar el historial de pagos.  
El sistema está dividido en **frontend** y **backend**:

- **Frontend:** React + TypeScript + Vite  
- **Backend:** Node.js + Express + TypeScript  
- **IDE recomendado:** Visual Studio Code  

Aplica el paradigma de **Programación Orientada a Objetos (POO)**, organizando la lógica en clases y servicios y manejando relaciones como agregación y composición. La primera iteración cubre funcionalidades básicas: registro de cobros, emisión de recibos y consulta de pagos.

---

## Estructura del proyecto

```
SistemaCobro/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ services/
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ vite.config.ts
│
├─ backend/
│  ├─ src/
│  │  ├─ models/
│  │  ├─ routes/
│  │  └─ app.ts
│  ├─ package.json
│  └─ tsconfig.json
│
└─ README.md
```

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/PabloVReyes/SistemaCobro.git
cd SistemaCobro
```

### 2. Ejecutar Backend
```bash
cd backend
yarn install
yarn dev
```
- URL por defecto: `http://localhost:3000`

### 3. Ejecutar Frontend
```bash
cd frontend
yarn install
yarn dev
```
- URL por defecto: `http://localhost:5173`

> Nota: Ejecutar **frontend** y **backend** simultáneamente para que la aplicación funcione correctamente.

---

## Funcionalidades de la primera iteración
1. Iniciar sesión  
2. Registrar cobros en efectivo  
3. Emitir recibos digitales o impresos  
4. Consultar pagos por vecino o por fecha  

---

## Recomendaciones
- Visual Studio Code permite depuración y extensiones para React, TypeScript y Node.js.  
- Node.js v18+ y Yarn actualizado son requeridos.  
- Mantener ambos servidores ejecutándose al mismo tiempo para la comunicación mediante API.  

---

## Contribuciones
Este proyecto es desarrollado por **Pablo Vázquez Reyes** como parte de la actividad de desarrollo de software para la Maestría en Educación.  
Se aceptan sugerencias y mejoras siguiendo buenas prácticas de **POO** y **React/Node.js**.

