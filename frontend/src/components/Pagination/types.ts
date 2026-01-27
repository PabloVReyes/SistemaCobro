
export interface PaginationState {
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
}