import { getCollectionsQuery, postCollectionsQuery } from "src/Helpers/collections.query";

export const getCollectionsService = async () => {
    const data = await getCollectionsQuery();
    return data;
}

interface CollectionData {
    monto: number;
    fecha: Date;
    vecinoId: number;
    metodo: string;
    userId: number;
}

export const postCollectionsService = async (collectionData: CollectionData) => {
    console.log(collectionData);
    await postCollectionsQuery(collectionData);
    return true;
}