import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SortableDirective } from '../core/directives/sortable.directive';
import { HeroService } from '../core/services/hero.service';
import { HERO } from '../models/hero.model';
import { SortEvent } from '../models/table.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [HeroService, DecimalPipe]
})
export class HeroComponent implements OnInit {

  heros$: Observable<HERO[]>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public heroService: HeroService) {
    this.heros$ = this.heroService.heros$;
    this.total$ = this.heroService.total$;
  }

  ngOnInit(): void {
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
