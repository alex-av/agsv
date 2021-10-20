import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";




export const ProfileRouters: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: ProfileComponent
            },
        ]
    }
]