import type { RouteObject } from "react-router-dom";
import { PublicRoutes } from "../../../routes/public.routes";
import { Login } from "../page";

export const authRoutes: RouteObject = {
    path: "/auth",
    element: (
        <PublicRoutes>
            <Login />
        </PublicRoutes>
    ),
}