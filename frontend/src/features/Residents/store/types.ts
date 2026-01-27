export interface ResidentsState {
    page: number;
    limit: number;
    totalItems: number;
    search: string;
    setPage: (page: number) => void;
    setLimit: (limit: number) => void;
    setTotalItems: (total: number) => void;
    setSearch: (search: string) => void;
    totalPages: () => number;
    firstItem: () => number;
    lastItem: () => number;

    isFetching: boolean;
    residents: any[]
    fetch: () => void;
    add: (data: any) => void;
    remove: (id: number) => void;
}