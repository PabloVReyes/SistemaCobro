import prisma from "src/Config/prisma";

export const getCollectionsQuery = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await prisma.cobro.findMany({
                include: {
                    usuario: true,
                    vecino: true
                }
            });
            resolve(data);
        } catch (error) {
            reject([]);
        }
    })
}

export const postCollectionsQuery = async (body: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            await prisma.cobro.create({
                data: {
                    monto: body.monto,
                    fecha: new Date(),
                    vecinoId: body.vecinoId,
                    metodo: body.metodo,
                    usuarioId: body.usuarioId,
                }
            })

            resolve(true);
        } catch (error) {
            console.error("Error en postCollectionQuery", error)
            reject(false);
        }
    }
    )
}