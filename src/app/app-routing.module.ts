import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppLayout } from './components/layouts/app-layout/app-layout.component';
import { Authentication } from './components/layouts/authentication/authentication.component';
import { BlankLayoutComponent } from './components/layouts/blank-layout/blank-layout.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { AutocompleteComponent } from './components/molecules/autocomplete/autocomplete.component';
import { CalendarWidgetComponent } from './components/molecules/calendar-widget/calendar-widget.component';
import { ChangePassFormComponent } from './components/molecules/change-pass-form/change-pass-form.component';
import { ContextButtonComponent } from './components/molecules/context-button/context-button.component';
import { FormCommentComponent } from './components/molecules/form-comment/form-comment.component';
import { FormQuestionComponent } from './components/molecules/form-question/form-question.component';
import { FormShareComponent } from './components/molecules/form-share/form-share.component';
import { PostMultiImageComponent } from './components/molecules/post-multi-image/post-multi-image.component';
import { RecoveryFormComponent } from './components/molecules/recovery-form/recovery-form.component';
import { SideMenuComponent } from './components/molecules/side-menu/side-menu.component';
import { UpdloadImagesComponent } from './components/molecules/updload-images/updload-images.component';
import { E404Component } from './views/e404/e404.component';
// components
import { V1MainComponent } from './views/v1-main/v1-main.component';
import { V10SingleQuestionComponent } from './views/v10-single-question/v10-single-question.component';
import { V11SingleAnswerComponent } from './views/v11-single-answer/v11-single-answer.component';
import { V12ProfileViewComponent } from './views/v12-profile-view/v12-profile-view.component';
import { V13RankingViewComponent } from './views/v13-ranking-view/v13-ranking-view.component';
import { V14LocationViewComponent } from './views/v14-location-view/v14-location-view.component';
import { V15OnlineViewComponent } from './views/v15-online-view/v15-online-view.component';
import { V16NotificationsViewComponent } from './views/v16-notifications-view/v16-notifications-view.component';
import { V17ElementsSideMenuComponent } from './views/v17-elements-side-menu/v17-elements-side-menu.component';
import { V18EditProfileComponent } from './views/v18-edit-profile/v18-edit-profile.component';
import { V19PublicPostComponent } from './views/v19-public-post/v19-public-post.component';
import { V2LoginComponent } from './views/v2-login/v2-login.component';
import { V20ChatViewComponent } from './views/v20-chat-view/v20-chat-view.component';
import { V3SignUpViewComponent } from './views/v3-sign-up-view/v3-sign-up-view.component';
import { V4ProfileComponent } from './views/v4-profile/v4-profile.component';
import { V5ProfileConfigurationComponent } from './views/v5-profile-configuration/v5-profile-configuration.component';
import { V6FeedComponent } from './views/v6-feed/v6-feed.component';
import { V7QuestionsListComponent } from './views/v7-questions-list/v7-questions-list.component';
import { V8AnswersListComponent } from './views/v8-answers-list/v8-answers-list.component';
import { V9ShareListComponent } from './views/v9-share-list/v9-share-list.component';


export const AppRoutes: Routes = [
  {
    path: 'authentication',
    component: Authentication,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'feeds',
    component: AppLayout,
    loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsModule)
  },
  {
    path: 'profile',
    component: AppLayout,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'posts',
    component: AppLayout,
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  { //TODO: Borrar
    path: 'pub',
    component:BlankLayoutComponent,
    children:[{
      path:'',
      component:V20ChatViewComponent
    }]
  },
  { 
    path:'**',
    redirectTo:'feeds'
  }
  // {
  //   path: '',
  //   component: V1MainComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full'},
  //     {
  //       path:'v4',
  //       component:V4ProfileComponent
  //     },
  //   ]
  // },
  // { 
  //   path:'',
  //   component:V1MainComponent,
  //   pathMatch:'full'
  // },
  // { 
  //   path:'v2',
  //   component:V2LoginComponent
  // },
  // { 
  //   path:'v4',
  //   component:V4ProfileComponent
  // },
  // { 
  //   path:'v5',
  //   component:V5ProfileConfigurationComponent
  // },
  // { 
  //   path:'v6',
  //   component:V6FeedComponent
  // },
  // { 
  //   path:'v7',
  //   component:V7QuestionsListComponent
  // },
  // { 
  //   path:'v8',
  //   component:V8AnswersListComponent
  // },
  // { 
  //   path:'v9',
  //   component:V9ShareListComponent
  // },
  // { 
  //   path:'v10',
  //   component:V10SingleQuestionComponent
  // },
  // { 
  //   path:'v11',
  //   component:V11SingleAnswerComponent
  // },
  // { 
  //   path:'v12',
  //   component:V12ProfileViewComponent
  // },
  // { 
  //   path:'v13',
  //   component:V13RankingViewComponent
  // },
  // { 
  //   path:'v14',
  //   component:V14LocationViewComponent
  // },
  // { 
  //   path:'v15',
  //   component:V15OnlineViewComponent
  // },
  // { 
  //   path:'v16',
  //   component:V16NotificationsViewComponent
  // },
  // { 
  //   path:'v17',
  //   component:V17ElementsSideMenuComponent
  // },
  // {
  //   path:'v18',
  //   component:V18EditProfileComponent
  // },  

];


