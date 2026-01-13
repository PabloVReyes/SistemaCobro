import prisma from "src/Config/prisma"

export const loginQuery = (username: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await prisma.usuario.findUnique({
                where: {
                    username
                }
            })

            resolve(data)
        } catch (error) {
            console.error("Error en loginQuery", error)
            reject(false)
        }
    })
}