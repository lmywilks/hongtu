import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SortableDirective } from '../core/directives/sortable.directive';
import { HeroService } from '../core/services/hero.service';
import { HERO } from '../models/hero.model';
import { SortEvent } from '../models/table.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [HeroService]
})
export class HeroComponent {

  heros$: Observable<HERO[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public heroService: HeroService) {
    this.heros$ = this.heroService.heros$;
    this.total$ = this.heroService.total$;
  }

  onSort(event: any) {
    const { column, direction } = event as SortEvent;

    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.heroService.sortColumn = column;
    this.heroService.sortDirection = direction;
  }

}
