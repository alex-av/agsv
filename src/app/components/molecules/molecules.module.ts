import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { PageCounterComponent } from './page-counter/page-counter.component';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { AnswersComponent } from './answers/answers.component';
import { PostDateComponent } from './post-date/post-date.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { AnswerStarsComponent } from './answer-stars/answer-stars.component';
import { ListPostItemComponent } from './list-post-item/list-post-item.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ProfileBackgroundComponent } from './profile-background/profile-background.component';
import { ProfileButtonsRowComponent } from './profile-buttons-row/profile-buttons-row.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SubtitleHeaderComponent } from './subtitle-header/subtitle-header.component';
import { ItemIconInfoComponent } from './item-icon-info/item-icon-info.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SelectComponent } from './select/select.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ModalComponent } from './modal/modal.component';
import { FormQuestionComponent } from './form-question/form-question.component';
import { FormShareComponent } from './form-share/form-share.component';
import { CalendarWidgetComponent } from './calendar-widget/calendar-widget.component';
import { FormCommentComponent } from './form-comment/form-comment.component';
import { ContextButtonComponent } from './context-button/context-button.component';
import { SinglePostFormComponent } from './single-post-form/single-post-form.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { ChangePassFormComponent } from './change-pass-form/change-pass-form.component';
import { CancelRegButtonsComponent } from './cancel-reg-buttons/cancel-reg-buttons.component';
import { FormProfileConfigComponent } from './form-profile-config/form-profile-config.component';
import { FormProfileProductorComponent } from './form-profile-productor/form-profile-productor.component';
import { FormProfileInvestigadorComponent } from './form-profile-investigador/form-profile-investigador.component';
import { FormProfileExtensionistaComponent } from './form-profile-extensionista/form-profile-extensionista.component';
import { UpdloadImagesComponent } from './updload-images/updload-images.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {HttpClientModule} from '@angular/common/http';
import { PostMultiImageComponent } from './post-multi-image/post-multi-image.component';

/* Third party*/
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule } from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {GalleriaModule} from 'primeng/galleria';
import {FileUploadModule} from 'primeng/fileupload';






@NgModule({
  declarations: [
    LoginFormComponent,
    SocialLoginComponent,
    ProfileButtonComponent,
    PageCounterComponent,
    PostComponent,
    PostHeaderComponent,
    AnswersComponent,
    PostDateComponent,
    PostBodyComponent,
    AnswerStarsComponent,
    ListPostItemComponent,
    ListContainerComponent,
    ProfileBackgroundComponent,
    ProfileButtonsRowComponent,
    ProfileInfoComponent,
    ProfileAboutComponent,
    UserItemComponent,
    SubtitleHeaderComponent,
    ItemIconInfoComponent,
    SideMenuComponent,
    SelectComponent,
    ContextMenuComponent,
    ModalComponent,
    FormQuestionComponent,
    FormShareComponent,
    CalendarWidgetComponent,
    FormCommentComponent,
    AutocompleteComponent,
    ContextButtonComponent,
    SinglePostFormComponent,
    PostCommentsComponent,
    RecoveryFormComponent,
    ChangePassFormComponent,
    CancelRegButtonsComponent,
    FormProfileConfigComponent,
    FormProfileProductorComponent,
    FormProfileInvestigadorComponent,
    FormProfileExtensionistaComponent,
    UpdloadImagesComponent,
    PostMultiImageComponent

  ],
  exports: [
    LoginFormComponent,
    SocialLoginComponent,
    ProfileButtonComponent,
    PageCounterComponent,
    PostComponent,
    PostHeaderComponent,
    AnswersComponent,
    PostDateComponent,
    ListPostItemComponent,
    ListContainerComponent,
    ProfileBackgroundComponent,
    ProfileButtonsRowComponent,
    ProfileInfoComponent,
    ProfileAboutComponent,
    UserItemComponent,
    SubtitleHeaderComponent,
    ItemIconInfoComponent,
    SideMenuComponent,
    SelectComponent,
    ContextMenuComponent,
    ModalComponent,
    FormQuestionComponent,
    FormShareComponent,
    CalendarWidgetComponent,
    AutocompleteComponent,
    ContextButtonComponent,
    SinglePostFormComponent,
    PostCommentsComponent,
    RecoveryFormComponent,
    ChangePassFormComponent,
    CancelRegButtonsComponent,
    FormProfileConfigComponent,
    FormProfileProductorComponent,
    FormProfileInvestigadorComponent,
    FormProfileExtensionistaComponent,
    UpdloadImagesComponent,
    FormCommentComponent


  ],
  imports: [
    CommonModule,
    AtomsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FileUploadModule,
    HttpClientModule,
    GalleriaModule

  ]
})
export class MoleculesModule { }
