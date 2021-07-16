import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { HeroState } from "./hero.reducer";

export const selectHeroState = createFeatureSelector<AppState, HeroState>('hero');

export const getHeros = createSelector(selectHeroState, (state: HeroState) => state.heros);