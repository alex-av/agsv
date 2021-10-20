import { Action, createReducer, on } from '@ngrx/store';
import { ModelSession } from 'src/app/core/models/session.model';
import { login, logout } from "../actions/authentication.actions";

 
export const initialState = new ModelSession(null);
 
const _authenticationReducer = createReducer(
  initialState,
  on(login, (state, session) => {
    return {
      ...state,
      isLogIn: true,
      refresh_token: session.refresh_token,
      access_token: session.access_token,
      expires_in: session.expires_in,
    }
  }),
  on(logout, (state) => new ModelSession(null) ),
  
);
 
export function authenticationReducer(state: ModelSession | undefined, action: Action) {
  return _authenticationReducer(state, action);
}