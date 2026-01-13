import type { RouteObject } from "react-router-dom";
import { Layout } from "../layout";
import { Neighbors } from "../pages/Neighbors";
import { Collections } from "../pages/Collections";
import { PrivateRoutes } from "./private.routes";
import { authRoutes } from "../features/auth/routes/routes";

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
            {
                index: true,
                element: <Neighbors />
            },
            {
                path: 'cobros',
                element: <Collections />
            }
        ]
    }
]