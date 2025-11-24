import { RequestHandler } from "express";
import { getNeighborService, postNeighborService } from "src/Services/neighbor.service";

export const getNeighborController: RequestHandler = async (req, res) => {
    try {
        const data = await getNeighborService();
        res.json(data);
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}

export const postNeighborController: RequestHandler = async (req, res) => {
    try {
        const body = req.body;
        await postNeighborService(body);
        res.status(201).send({ message: 'Vecino creado exitosamente' });
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}