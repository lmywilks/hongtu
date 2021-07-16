import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    REGISTER = '[Auth] Register',
    LOGOUT = '[Auth] Logout'
}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class Register implements Action {
    readonly type = AuthActionTypes.REGISTER;
    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActionsUnion = 
    Login |
    Register |
    Logout;