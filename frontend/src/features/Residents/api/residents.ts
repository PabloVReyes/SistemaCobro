import { api } from "../../../services/axios"

interface Props {
    search: string
    page: number
    limit: number;
}

export const getResidents = async ({ search, page, limit }: Props) => {
    const response = await api.get(`/api/residents?search=${search}&page=${page}&limit=${limit}`)
    return response.data
}

export const getResidentsCount = async ({ search }: { search: string }) => {
    const response = await api.get(`/api/residents/count?search=${search}`)
    return response.data
}

export const postResidents = async (data: any) => {
    const response = await api.post('/api/residents', data)
    return response.data
}

export const deleteResidents = async (id: number) => {
    const response = await api.delete(`/api/residents/${id}`,)
    return response.data
}

export const updateResident = async ({ id, name, address, phone, email }: { id: number, name: string, address: string, phone: string, email: string }) => {
    const response = await api.post(`/api/residents/${id}`, {
        name,
        address,
        phone,
        email
    })

    return response.data
}