import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from 'src/app/core/services/hero.service';
import { TableService } from 'src/app/core/services/table.service';
import { HERO } from 'src/app/models/hero.model';
import { SortableDirective, SortEvent } from 'src/app/core/directives/sortable.directive';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService, DecimalPipe]
})
export class TableComponent {

  @Input() type: string = 'hero';
  @Input() value$: Observable<any>;
//   @Input() total$: Observable<number>;

  heros$: Observable<HERO[]>;
  total$: Observable<number>;
  
  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public tableService: TableService) {
    this.heros$ = this.tableService.heros$;
    this.total$ = this.tableService.total$;
  }

  onSort(event: any) {
    const { column, direction } = event as SortEvent;

      this.headers.forEach(header => {
          if (header.sortable !== column) {
            header.direction = '';
          }
      });
  }
}
