import { api } from "../services/axios"

export const getNeighbors = async(): Promise<string[]> => {
    const response = await api.get(`/api/neighbor`)
    return response.data
}