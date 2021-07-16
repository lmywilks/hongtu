import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";
import * as fromAuth from "./auth.actions";

@Injectable()
export class AuthEffects {

    constructor(
      private actions$: Actions,
      private authService: AuthService
    ) {}

    Login = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.LOGIN),
        switchMap((payload: any) => this.authService.Login(payload.username, payload.password)),
        map((res: any) => new fromAuth.Login(res))
    );

    Register = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.REGISTER),
        switchMap((payload: any) => this.authService.Register(payload.username, payload.password)),
        map((res: any) => new fromAuth.Register(res))
    );
}