import {  IconBuildingCommunity, IconCash } from "@tabler/icons-react";

interface Props {
    label: string;
    icon: any;
    link?: string;
}

export const routes: Props[] = [
    {
        label: "Vecinos",
        icon: IconBuildingCommunity,
        link: '/'
    }, 
    {
        label: "Cobros",
        icon: IconCash,
        link: '/cobros'
    }
]