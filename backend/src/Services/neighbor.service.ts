import { getNeighborQuery, postNeighborQuery } from "src/Helpers/neighbor.query";

export const getNeighborService = async () => {
    const data = await getNeighborQuery();
    return data;
}

interface NeighborData {
    name: string;
    address: string;
}

export const postNeighborService = async (neighborData: NeighborData) => {
    await postNeighborQuery(neighborData);
    return true;
}