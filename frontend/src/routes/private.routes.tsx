import type { ReactNode } from "react"
import { useAuthStore } from "../features/store/store"
import { Navigate } from "react-router-dom"

interface PrivateRoutesProps {
    children: ReactNode
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { token, user } = useAuthStore()

    if (!token || !user) {
        return <Navigate to="/auth" replace />
    }

    return (
        <>
            {children}
        </>
    )
}