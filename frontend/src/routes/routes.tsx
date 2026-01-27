import type { RouteObject } from "react-router-dom";
import { Layout } from "../layout";
import { Collections } from "../pages/Collections";
import { PrivateRoutes } from "./private.routes";
import { authRoutes } from "../features/auth/routes/routes";
import { residentsRoutes } from "../features";

export const routes: RouteObject[] = [
    authRoutes,
    {
        path: '/',
        element: (
            <PrivateRoutes>
                <Layout />
            </PrivateRoutes>
        ),
        children: [
            residentsRoutes,
            {
                path: 'cobros',
                element: <Collections />
            }
        ]
    }
]