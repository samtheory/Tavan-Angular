export interface Pagination {
    totalPages: number;
    itemsPerPage: number;
    currentPage: number;
    totalItems: number;
}

export class PaginatedResult<T> {
 result: T;
 pag: Pagination;
}

export class ExcelResult<T> {
    result: T;
}
