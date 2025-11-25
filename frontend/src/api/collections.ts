import { api } from "../services/axios"

export const getCollections = async(): Promise<string[]> => {
    const response = await api.get(`/api/collection`)
    return response.data
}