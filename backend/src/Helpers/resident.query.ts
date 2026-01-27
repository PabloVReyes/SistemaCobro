import { resolve } from "path";
import prisma from "src/Config/prisma";

interface GetResidentsProps {
    search: string
    take: number;
    skip: number;
}
export const getResidentsQuery = ({ search, skip, take }: GetResidentsProps) => {
    return new Promise(async (resolve, reject) => {
        try {
            let whereCondition = {}

            if (search && search.trim() != "") {
                whereCondition = {
                    OR: [
                        { name: { contains: search } },
                        { address: { contains: search } },
                        { phone: { contains: search } },
                        { email: { contains: search } },
                    ]
                }
            }

            const data = await prisma.residente.findMany({
                where: whereCondition,
                skip,
                take
            });

            resolve(data);
        } catch (error) {
            console.error("error en getResidentsQuery", error)
            reject([])
        }
    })
}

export const getResidentsCountQuery = ({ search }: { search: string }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let whereCondition = {}

            if (search && search.trim() != "") {
                whereCondition = {
                    OR: [
                        { name: { contains: search } },
                        { address: { contains: search } },
                        { phone: { contains: search } },
                        { email: { contains: search } },
                    ]
                }
            }

            const data = await prisma.residente.count({
                where: whereCondition
            })

            resolve(data)
        } catch {
            console.error("Error en ")
            reject(0)
        }
    })
}

interface Props {
    name: string;
    address: string;
    phone: string;
    email: string
}

export const postResidentsQuery = async ({ name, address, phone, email }: Props) => {
    return new Promise(async (resolve, reject) => {
        try {
            await prisma.residente.create({
                data: {
                    name,
                    address,
                    phone,
                    email
                }
            })

            resolve(true);
        } catch (error) {
            console.error("Error en postResidentsQuery", error)
            reject(false);
        }
    }
    )
}

export const deleteResidentsQuery = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            await prisma.residente.delete({
                where: {
                    id
                }
            })

            resolve(true)
        } catch (error) {
            console.error("Error en deleteResidentsQuery", error)
            reject(false)
        }
    })
}

export const putResidentsQuery = ({ id, name, address, phone, email }: { id: number, name: string, address: string, phone: string, email: string }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await prisma.residente.update({
                where: {
                    id
                },
                data: {
                    name,
                    address,
                    phone,
                    email
                }
            })
            resolve(true)
        } catch (error) {
            console.error("Error en putResidentsQuery", error)
            reject(false)
        }
    })
}