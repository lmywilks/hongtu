import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth';
import * as fromHero from './hero';

export interface AppState {
  auth: fromAuth.AuthState;
  hero: fromHero.HeroState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer,
  hero: fromHero.heroReducer
};

export const effects = [
  fromAuth.AuthEffects,
  fromHero.HeroEffects
]