import { PipeTransform } from "@angular/core";
import { SortColumn } from "src/app/models/table.model";

export const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export const matches = (type: string, value: any, term: string, pipe: PipeTransform) => {
    if (type === 'hero') {
        return value.name.toLowerCase().includes(term.toLowerCase())
          || value.pinyin.toLowerCase().includes(term.toLowerCase());
    }
}

export const sort = (type: string, value: any[], column: SortColumn, direction: string) => {
    if (type === '' || direction === '' || column === '') {
      return value;
    } else {
      if (type === 'hero') {
        return [...value].sort((a, b) => {
          const res = compare(Number(a.attribute[column]), Number(b.attribute[column]));
          return direction === 'asc' ? res : -res;
        });
      }
      return value;
    }
}