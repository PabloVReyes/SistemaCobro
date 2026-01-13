import { api } from "../../../services/axios"

export const login = async (data: { username: string | null, password: string | null }) => {
    const response = await api.post("/api/auth/login", data)
    return response.data
}