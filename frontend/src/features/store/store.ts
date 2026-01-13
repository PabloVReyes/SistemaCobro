import { create } from "zustand";
import { login } from "../auth/api/auth";

export interface AuthState {
    user: string | null;
    token: string | null;
    error: string | null;
    isLoading: boolean;
    login: (data: { username: string | null, password: string | null }) => Promise<void>
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: localStorage.getItem("token"),
    error: null,
    isLoading: false,

    login: async (data) => {
        set({ isLoading: true, error: null })
        try {
            const response = await login(data);
            const token = response.token

            localStorage.setItem("token", token)

            set({
                token: response.token,
                user: response.user
            })
        } catch (error: any) {
            const backendMessage = error.response.data.error || error?.response.data?.msg || "Error desconocido del servidor"
            set({ error: backendMessage })
            throw new Error(backendMessage)
        } finally {
            set({ isLoading: false })
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ token: null });
    }
}))