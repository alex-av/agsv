import { Routes } from "@angular/router";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostResponseComponent } from "./post-response/post-response.component";

export const PostRouters: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: PostDetailComponent
            },
            {
                path: 'response/:id',
                component: PostResponseComponent
            },

        ]
    }
]