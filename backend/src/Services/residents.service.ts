import { deleteResidentsQuery, getResidentsCountQuery, getResidentsQuery, postResidentsQuery, putResidentsQuery } from "src/Helpers/resident.query";

export const getResidentsService = async (req: any) => {
    const { page, limit, search } = req.query

    const props = {
        skip: (limit * page - limit),
        take: Number(limit),
        search
    }

    const data = await getResidentsQuery(props);
    return data;
}

interface ResidentProps {
    name: string;
    address: string;
    phone: string;
    email: string;
}

export const getResidentsCountService = async (req: any) => {
    const { search } = req.query
    const data = await getResidentsCountQuery({ search })
    return data

}

export const postReisdentsService = async ({ name, address, phone, email }: ResidentProps) => {
    const props = {
        name,
        address,
        phone,
        email
    }
    await postResidentsQuery(props);
    return true;
}


export const deleteResidentsService = async (req: any) => {
    const id = Number(req.params.id)
    await deleteResidentsQuery(id)
    return true
}

export const putResidentsService = async (req: any) => {
    const id = Number(req.params.id)
    const { name, address, phone, email } = req.body

    const props = {
        id,
        name,
        address,
        phone,
        email
    }

    await putResidentsQuery(props)
    return true
}