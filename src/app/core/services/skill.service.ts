import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, tap, debounceTime, delay } from 'rxjs/operators';
import { SearchSkillResult } from 'src/app/models/search-result.model';
import { SKILL } from 'src/app/models/skill.model';
import { TABLE_STATE, SortColumn, SortDirection } from 'src/app/models/table.model';
import { environment } from 'src/environments/environment';
import { Skills } from '../config/skills';
import { matches } from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly API_ROOT: string = environment.API_ROOT;

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _skills$ = new BehaviorSubject<SKILL[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _total_skills: SKILL[] = [];

  private _state: TABLE_STATE = {
    page: 1,
    pageSize: 8,
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
      switchMap((skills) =>{
        this._total_skills = skills;           
        return this._search();
      }),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(results => {
        this._skills$.next(results.skills);
        this._total$.next(results.total);
    });

    this._search$.next();
  }

  get skills$() { return this._skills$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  
  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }

  private _set(patch: Partial<TABLE_STATE>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  
  List() {
    return of(Skills);
  }

  Retrieve(id: string) {
    return of(Skills.filter(skill => skill.id === id)[0]);
  }

  Add(skill: SKILL) {}

  Update(id: string, skill: SKILL) {}

  Delete(id: string) {}

  private _search(): Observable<SearchSkillResult> {
    const { pageSize, page, searchTerm } = this._state;

    // 1. filter
    let skills = this._total_skills.filter(skill => matches('skill', skill, searchTerm));
    const total = skills.length;

    // 2. paginate
    skills = skills.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ skills, total });
  }
}
