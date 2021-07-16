import { HERO } from "src/app/models/hero.model";
import * as fromHero from './hero.actions';

export interface HeroState {
    heros: HERO[];
    myHeros: string[];
}

const initialHeroState: HeroState = {
    heros: [],
    myHeros: []
};

export function heroReducer (
    state: HeroState = initialHeroState,
    action: fromHero.HeroActionsUnion
): HeroState {
    const clonedState: HeroState = Object.assign({}, state);

    switch (action.type) {
        case fromHero.HeroActionTypes.INIT:
            clonedState.heros = action.payload.heros;
            return clonedState;
        default:
            return clonedState;
    }
}