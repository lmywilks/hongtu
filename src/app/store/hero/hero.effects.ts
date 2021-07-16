import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { HeroService } from "src/app/core/services/hero.service";
import * as fromHero from '../app.actions';

@Injectable()
export class HeroEffects {
    constructor(private action$: Actions, private heroService: HeroService) {}

    Init = this.action$.pipe(
        ofType(fromHero.AppActionTypes.INIT),
        switchMap(() => this.heroService.List()),
        map((heros: any) => new fromHero.Init(heros))
    );
}