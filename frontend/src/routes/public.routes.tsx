import type { ReactNode } from "react"
import { useAuthStore } from "../features/store/store"
import { Navigate } from "react-router-dom"

interface PublicRouteProps {
    children: ReactNode
}

export const PublicRoutes = ({ children }: PublicRouteProps) => {
    const token = useAuthStore((state) => state.token)

    if (token) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            {children}
        </>
    )
}