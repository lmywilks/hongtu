import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SortableDirective } from '../core/directives/sortable.directive';
import { HeroService } from '../core/services/hero.service';
import { HERO, HERO_QUALITY } from '../models/hero.model';
import { SortEvent } from '../models/table.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [HeroService]
})
export class HeroComponent {

  HERO_QUALITY = HERO_QUALITY;
  heros$: Observable<HERO[]>;
  total$: Observable<number>;

  isFull: boolean = false;

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

  switchLv() {
    this.isFull = !this.isFull;
  }

  calcAttribute(attr: string, growth: string) {
    if (this.isFull) return (Number(attr) + Number(growth) * 50).toFixed(1);

    return attr;
  }

}
