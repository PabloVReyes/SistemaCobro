import type { RouteObject } from "react-router-dom";
import { Layout } from "../layout";
import { Neighbors } from "../pages/Neighbors";
import { Collections } from "../pages/Collections";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Layout />
        ),
        children: [
            {
                index: true,
                element: <Neighbors />
            },
            {
                path: 'cobros',
                element: <Collections/>
            }
        ]
    }
]