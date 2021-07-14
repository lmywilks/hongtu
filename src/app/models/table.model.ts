import { ATTRIBUTE } from "./hero.model";

export interface TABLE_STATE {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
}

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}

export type SortColumn = keyof ATTRIBUTE | '';
export type SortDirection = 'asc' | 'desc' | '';