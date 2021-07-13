import { Pipe, PipeTransform } from '@angular/core';

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], type: string, column: string, direction: string): any[] {
    if (type === '' || column === '' || direction === '') {
        return value;
    } else {
        if (type === 'hero') {
            return [...value].sort((a, b) => {
                const res = compare(a.attribute[column], b.attribute[column]);
                return direction === 'asc' ? res : -res;
            });
        }

        return value;
    }
  }

}
