import { Action } from "@ngrx/store";

export enum HeroActionTypes {
    INIT = '[Hero] Init',
    FETCH = '[Hero] Fetch',
    FETCH_SUCCESS = '[Hero] Fetch Success',
    FETCH_FAILURE = '[Hero] Fetch Failure'
}

export class Init implements Action {
    readonly type = HeroActionTypes.INIT;
    constructor(public payload: any) {}
}

export class Fetch implements Action {
    readonly type = HeroActionTypes.FETCH;
    constructor(userId: string) {}
}

export class FetchSuccess implements Action {
    readonly type = HeroActionTypes.FETCH_SUCCESS;
    constructor(payload: any) {}
}

export class FetchFailure implements Action {
    readonly type = HeroActionTypes.FETCH_FAILURE;
    constructor(error: any) {}
}

export type HeroActionsUnion = 
    Init |
    Fetch |
    FetchSuccess |
    FetchFailure;