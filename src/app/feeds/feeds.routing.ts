import { Routes } from "@angular/router";
import { PostComponent } from "../components/molecules/post/post.component";
import { FeedsComponent } from "./feeds/feeds.component";



export const FeedsRouters: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FeedsComponent
            },
            {
                path: ':id',
                component: PostComponent
            },
        ]
    }
]