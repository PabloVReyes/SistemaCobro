import { RequestHandler } from "express";
import { loginService } from "src/Services/auth.service";

export const getUsersController: RequestHandler = (req, res) => {
    try {
        res.json({ message: 'Lista de usuarios' });
    } catch (error) {
        res.status(500).send({ error: 'Error del servidor' });
    }
}

export const loginController: RequestHandler = async (req, res) => {
    try {
        const data = await loginService(req)
        res.json(data)
    } catch (error: any) {
        switch (error.message) {
            case "INVALID_CREDENTIALS": {
                res.status(401).json({ msg: "Credenciales invalidas" })
                break;
            }
            case "USER_INACTIVE": {
                res.status(403).json({ msg: "Usuario inactivo" })
                break;
            }
            default: {
                res.status(500).send({ msg: error.message || "Error al iniciar sesion" })
                break;
            }
        }

    }
}