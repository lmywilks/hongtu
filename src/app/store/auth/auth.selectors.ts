import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AppState, AuthState>('auth');

export const isLogin = createSelector(selectAuthState, (state: AuthState) => state.isLogin);

export const getToken = createSelector(selectAuthState, (state: AuthState) => state.token);

export const getUserId = createSelector(selectAuthState, (state: AuthState) => state.userId);

export const getUsername = createSelector(selectAuthState, (state: AuthState) => state.username);