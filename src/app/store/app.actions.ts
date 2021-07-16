import { Action } from "@ngrx/store";

export enum AppActionTypes {
    INIT = '[App] Init'
}

export class Init implements Action {
    readonly type = AppActionTypes.INIT;
    constructor(public payload: any) {}
}

export type AppActionsUnion = 
    Init;