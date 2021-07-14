import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortDirection, SortColumn, SortEvent } from 'src/app/models/table.model';

const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableDirective {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
      this.direction = rotate[this.direction];
      this.sort.emit({ column: this.sortable, direction: this.direction });
  }

}
