import * as fromAuth from './auth.actions';

export interface AuthState {
    isLogin: boolean;
    username: string;
    userId: string;
    token: string;
}

const initialAuthState = {
    isLogin: false,
    username: '',
    userId: '',
    token: ''
};

export function authReducer(
    state: AuthState = initialAuthState, 
    action: fromAuth.AuthActionsUnion
): AuthState {
    const clonedState: AuthState = Object.assign({}, state);

    switch (action.type) {
        case fromAuth.AuthActionTypes.LOGIN:            
        case fromAuth.AuthActionTypes.REGISTER:
            clonedState.isLogin = true;
            clonedState.username = action.payload.username;
            clonedState.token = action.payload.token;
            clonedState.userId = action.payload.userId;
            localStorage.setItem('authToken', action.payload.token);
            return clonedState;
        case fromAuth.AuthActionTypes.LOGOUT:
            localStorage.removeItem('authToken');
            return initialAuthState;
        default:
            return clonedState;
    }
}