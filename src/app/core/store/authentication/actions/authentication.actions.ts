import { createAction, props } from '@ngrx/store';
import { ModelSession } from 'src/app/core/models/session.model';

export const chkLogin = createAction('[Check LogIn Component] Check LogIn');
export const logout = createAction('[LogOut Component] LogOut');

export const login = createAction(
    '[LogIn Component] LogIn',
    props<ModelSession>()
);