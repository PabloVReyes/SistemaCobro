import { RequestHandler } from "express";
import { getCollectionsService, postCollectionsService } from "src/Services/collections.service";

export const getCollectionsController: RequestHandler = async (req, res) => {
    try {
        const data = await getCollectionsService();
        res.json(data);
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}

export const postCollectionsController: RequestHandler = async (req, res) => {
    try {
        await postCollectionsService(req.body);
        res.status(201).send({ message: 'Cobro creado exitosamente' });
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}