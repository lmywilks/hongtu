import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Heros } from '../config/heros';
import { HERO } from 'src/app/models/hero.model';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { SortColumn, SortDirection, TABLE_STATE } from 'src/app/models/table.model';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { SearchHeroResult } from 'src/app/models/search-result.model';
import { sort, matches } from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly API_ROOT: string = environment.API_ROOT;

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _heros$ = new BehaviorSubject<HERO[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _total_heros: HERO[] = [];

  private _state: TABLE_STATE = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private http: HttpClient) { 
    this._search$.pipe(
        switchMap(() => this.List())
    ).pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap((heros) =>{
        this._total_heros = heros;        
        return this._search();
      }),
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

  List() {
    return of(Heros);
  }

  Retrieve(id: string) {
    return of(Heros.filter(hero => hero.id === id)[0]);
  }

  Add(hero: HERO) {}

  Update(id: string, hero: HERO) {}

  Delete(id: string) {}

  private _search(): Observable<SearchHeroResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let heros = sort('hero', this._total_heros, sortColumn, sortDirection);

    // 2. filter
    heros = heros.filter(hero => matches('hero', hero, searchTerm));
    const total = heros.length;

    // 3. paginate
    heros = heros.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({heros, total});
  }
}
