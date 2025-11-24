import prisma from "src/Config/prisma";

export const getNeighborQuery = async () => {
    try {
        const data = await prisma.vecino.findMany();
        return data;
    } catch (error) {
        return { message: 'Error al obtener los vecinos' };
    }
}

export const postNeighborQuery = async (body: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            await prisma.vecino.create({
                data: {
                    nombre: body.nombre,
                    direccion: body.direccion,
                }
            })

            resolve(true);
        } catch (error) {
            reject(false);
        }
    }
)}