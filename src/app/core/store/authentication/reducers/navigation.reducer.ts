
import { Action, createReducer, on } from '@ngrx/store';
import { ModelNavigation } from 'src/app/core/models/navigation.model';
import { offLoadding, onLoadding, setMenu } from '../actions/navigation.actions';


export const initialState: ModelNavigation = new ModelNavigation();

const _navigationReducer = createReducer(
    initialState,
    on(onLoadding, ( state ) => {
        return {...state, isLoading: true}
    }),
    on(offLoadding, ( state ) => {
        return {...state, isLoading: false}
    }),
    on(setMenu, ( state, navigation ) => {
        return {...state, menu: navigation.menu }
    })
)

export function navigationReducer(state: ModelNavigation | undefined, action: Action) {
    return _navigationReducer(state, action);
  }