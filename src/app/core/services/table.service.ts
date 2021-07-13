import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HERO } from 'src/app/models/hero.model';
import { SortColumn, SortDirection } from '../directives/sortable.directive';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SearchHeroResult } from 'src/app/models/search-result.model';
import { Heros } from '../config/heros';
import { DecimalPipe } from '@angular/common';

interface TABLE_STATE {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _heros$ = new BehaviorSubject<HERO[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: TABLE_STATE = {
      page: 1,
      pageSize: 10,
      searchTerm: '',
      sortColumn: '',
      sortDirection: ''
  };
    
  constructor(private pipe: DecimalPipe) {      
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(results => {
        this._heros$.next(results.heros);
        this._total$.next(results.total);
    });

    this._search$.next();
  }

  get heros$() { return this._heros$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<TABLE_STATE>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private matches(type: string, value: any, term: string, pipe: PipeTransform) {
      if (type === 'hero') {
          return value.name.toLowerCase().includes(term.toLowerCase())
            || value.pinyin.toLowerCase().includes(term.toLowerCase());
      }
  }

  private sort(type: string, value: any[], column: SortColumn, direction: string): any[] {
    if (type === '' || direction === '' || column === '') {
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

  private _search(): Observable<SearchHeroResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let heros = this.sort('hero', Heros, sortColumn, sortDirection);

    // 2. filter
    heros = heros.filter(hero => this.matches('hero', hero, searchTerm, this.pipe));
    const total = heros.length;

    // 3. paginate
    heros = heros.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({heros, total});
  }
}
