import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProfileConfigComponent } from "./profile-config/profile-config.component";
import { ProfileListComponent } from "./profile-list/profile-list.component";
import { SignInComponent } from "./sign-in/sign-in.component";


export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full'},
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'profile-list',
                component: ProfileListComponent
            },
            {
                path: 'profile-config/:userType',
                component: ProfileConfigComponent
            },
        ]
    }
]