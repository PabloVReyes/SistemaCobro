import { create } from "zustand";
import { type ResidentsState } from "./types";
import { getResidents, postResidents } from "../api";
import { deleteResidents, getResidentsCount, updateResident } from "../api/residents";

export const useResidentsStore = create<ResidentsState>((set, get) => ({
    // Paginacion
    page: 1,
    limit: 10,
    totalItems: 0,

    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit, page: 1 }),
    setTotalItems: (totalItems) => set({ totalItems }),
    setSearch: (search: any) => set({ search, page: 1 }),
    totalPages: () => Math.ceil(get().totalItems / get().limit),
    firstItem: () => {
        const { page, limit, totalItems } = get();
        if (totalItems === 0) return 0;
        return (page - 1) * limit + 1;
    },
    lastItem: () => Math.min(get().page * get().limit, get().totalItems),

    // Residentes
    residents: [],
    isFetching: false,
    search: "",

    async fetch() {
        const { search, page, limit } = get()
        try {
            const data = await getResidents({ search, page, limit })
            const count = await getResidentsCount({ search })

            set({ residents: data, totalItems: count })
        } finally {
            set({ isFetching: false })
        }
    },

    async add(data) {
        try {
            await postResidents(data)

            get().fetch()
        } catch (error: any) {
            throw new Error(error)
        }
    },

    async remove(id) {
        try {
            await deleteResidents(id)
            get().fetch()
        } catch (error: any) {
            throw new Error(error)
        }
    },

    async update(data) {
        try {
            await updateResident(data)
            get().fetch()
        } catch (error: any) {
            throw new Error(error)
        }
    }
}))