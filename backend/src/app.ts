import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './config/prisma';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const listarUsuarios = async () => {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
};

// Rutas de prueba
app.get('/', async(req: Request, res: Response) => {
    const data = await listarUsuarios()
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
