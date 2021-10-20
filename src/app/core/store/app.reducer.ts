import { ActionReducerMap } from "@ngrx/store";
import { ModelNavigation } from "../models/navigation.model";
import { ModelSession } from "../models/session.model";
import { authenticationReducer } from "./authentication/reducers/authentication.reducer";
import { navigationReducer } from "./authentication/reducers/navigation.reducer";



export interface AppState{

    session: ModelSession;
    navigation: ModelNavigation;
}

export const appReducer: ActionReducerMap<AppState> ={

    session: authenticationReducer,
    navigation: navigationReducer
} 