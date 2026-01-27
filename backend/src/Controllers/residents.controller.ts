import { RequestHandler, response } from "express";
import { deleteResidentsService, getResidentsCountService, getResidentsService, postReisdentsService, putResidentsService } from "src/Services/residents.service";

export const getResidentsController: RequestHandler = async (req, res) => {
    try {
        const data = await getResidentsService(req);
        res.json(data);
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}

export const getResidentsCountController: RequestHandler = async (req, res) => {
    try {
        const data = await getResidentsCountService(req)
        res.json(data)
    } catch (error: any) {
        res.status(500)
            .send({
                error: error.message || "Error del servidor"
            })
    }
}

export const postResidentsController: RequestHandler = async (req, res) => {
    try {
        const body = req.body;
        await postReisdentsService(body);
        res.status(201).send({ message: 'Vecino creado exitosamente' });
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}

export const deleteResidentsController: RequestHandler = async (req, res) => {
    try {
        await deleteResidentsService(req)
        res.json("Ok")
    } catch (error: any) {
        res.status(500)
            .send({
                error: error.message || "Error en el servidor"
            })
    }
}


export const putResidentsController: RequestHandler = async (req, res) => {
    try {
        await putResidentsService(req)
        res.json("Ok")
    } catch (error: any) {
        res.status(500)
            .send({
                error: error.message || "Error en el servidor"
            })
    }
}