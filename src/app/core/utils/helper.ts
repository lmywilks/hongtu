import { PipeTransform } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SortColumn } from "src/app/models/table.model";

export const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export const matches = (type: string, value: any, term: string) => {
    if (type === 'hero') {
        return value.name.toLowerCase().includes(term.toLowerCase())
          || value.name_en.toLowerCase().includes(term.toLowerCase());
    } else if (type === 'skill') {
        return value.name.toLowerCase().includes(term.toLowerCase())
        || value.name_en.toLowerCase().includes(term.toLowerCase());
    }
}

export const sort = (type: string, value: any[], column: SortColumn, direction: string, isFull?: boolean) => {
    if (type === '' || direction === '' || column === '') {
      return value;
    } else {
      if (type === 'hero') {
        if (isFull) {
            return [...value].sort((a, b) => {
                const res = compare(Number(a.attribute[column])+Number(a.growth[column])*50, Number(b.attribute[column])+Number(b.growth[column])*50);
                return direction === 'asc' ? res : -res;
            });
        }

        return [...value].sort((a, b) => {
          const res = compare(Number(a.attribute[column]), Number(b.attribute[column]));
          return direction === 'asc' ? res : -res;
        });
      }
      return value;
    }
}

export const MatchPassword = (abstractControl: AbstractControl) => {
    let password = abstractControl.get('password')?.value;
    let confirmPassword = abstractControl.get('confirmPassword')?.value;
    if (password != confirmPassword) {
        abstractControl.get('confirmPassword')?.setErrors({
            MatchPassword: true
        });
        return true;
    } else {
        return null;
    }
}