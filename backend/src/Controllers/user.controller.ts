import { RequestHandler } from "express";

export const getUsersController: RequestHandler = (req, res) => {
    try {
        res.json({ message: 'Lista de usuarios' });
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}