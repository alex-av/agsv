// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { V1MainComponent } from './v1-main/v1-main.component';
import { AtomsModule } from '../components/atoms/atoms.module';
import { LayoutModule } from '../components/layouts/layout.module';
import { V2LoginComponent } from './v2-login/v2-login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { V4ProfileComponent } from './v4-profile/v4-profile.component';
import { V5ProfileConfigurationComponent } from './v5-profile-configuration/v5-profile-configuration.component';
import { V6FeedComponent } from './v6-feed/v6-feed.component';
import { V7QuestionsListComponent } from './v7-questions-list/v7-questions-list.component';
import { V8AnswersListComponent } from './v8-answers-list/v8-answers-list.component';
import { V9ShareListComponent } from './v9-share-list/v9-share-list.component';
import { V10SingleQuestionComponent } from './v10-single-question/v10-single-question.component';
import { V11SingleAnswerComponent } from './v11-single-answer/v11-single-answer.component';
import { V12ProfileViewComponent } from './v12-profile-view/v12-profile-view.component';
import { V13RankingViewComponent } from './v13-ranking-view/v13-ranking-view.component';
import { V14LocationViewComponent } from './v14-location-view/v14-location-view.component';
import { V15OnlineViewComponent } from './v15-online-view/v15-online-view.component';
import { V16NotificationsViewComponent } from './v16-notifications-view/v16-notifications-view.component';
import { V17ElementsSideMenuComponent } from './v17-elements-side-menu/v17-elements-side-menu.component';
import { V18EditProfileComponent } from './v18-edit-profile/v18-edit-profile.component';
import { V3SignUpViewComponent } from './v3-sign-up-view/v3-sign-up-view.component';
import { NavbarComponent } from '../components/layouts/navbar/navbar.component';
import { E404Component } from './e404/e404.component';
import { V19PublicPostComponent } from './v19-public-post/v19-public-post.component';
import { V20ChatViewComponent } from './v20-chat-view/v20-chat-view.component';
import { V21SearchViewComponent } from './v21-search-view/v21-search-view.component';






@NgModule({
  declarations: [
    V1MainComponent,
    V2LoginComponent,
    V4ProfileComponent,
    V5ProfileConfigurationComponent,
    V6FeedComponent,
    V7QuestionsListComponent,
    V8AnswersListComponent,
    V9ShareListComponent,
    V10SingleQuestionComponent,
    V11SingleAnswerComponent,
    V12ProfileViewComponent,
    V13RankingViewComponent,
    V14LocationViewComponent,
    V15OnlineViewComponent,
    V16NotificationsViewComponent,
    V17ElementsSideMenuComponent,
    V18EditProfileComponent,
    V3SignUpViewComponent,
    E404Component,
    V19PublicPostComponent,
    V20ChatViewComponent,
    V21SearchViewComponent,


  ],
  exports:[
    V1MainComponent,
    V2LoginComponent,
    V3SignUpViewComponent,
    V4ProfileComponent,
    V5ProfileConfigurationComponent,
    V6FeedComponent,
    V7QuestionsListComponent,
    V8AnswersListComponent,
    V9ShareListComponent,
    V10SingleQuestionComponent,
    V11SingleAnswerComponent,
    V12ProfileViewComponent,
    V13RankingViewComponent,
    V14LocationViewComponent,
    V15OnlineViewComponent,
    V16NotificationsViewComponent,
    V17ElementsSideMenuComponent,
    V18EditProfileComponent,
    E404Component,
    V19PublicPostComponent,
    V20ChatViewComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AtomsModule,
    MoleculesModule,
    
  ]
})
export class ViewsModule { }