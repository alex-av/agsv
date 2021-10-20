import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { InputComponent } from '../molecules/input/input.component';
import { IconComponent } from './icon/icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { LinkBasicComponent } from './link-basic/link-basic.component';
import { LinkComponent } from './link/link.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { TagComponent } from './tag/tag.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { InteractionsCounterComponent } from './interactions-counter/interactions-counter.component';
import { ItemThumbnailComponent } from './item-thumbnail/item-thumbnail.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CheckboxModule } from 'primeng/checkbox'
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    MainLogoComponent,
    InputComponent,
    IconComponent,
    ButtonComponent,
    LinkBasicComponent,
    LinkComponent,
    ProfilePhotoComponent,
    TagComponent,
    FloatingButtonComponent,
    InteractionsCounterComponent,
    ItemThumbnailComponent,
    TextareaComponent,
    CheckBoxComponent,
    ToastComponent

  ],
  exports:[
    MainLogoComponent,
    InputComponent,
    ButtonComponent,
    LinkBasicComponent,
    LinkComponent,
    IconComponent,
    ProfilePhotoComponent,
    TagComponent,
    FloatingButtonComponent,
    InteractionsCounterComponent,
    ItemThumbnailComponent,
    TextareaComponent,
    CheckBoxComponent,
    ToastComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    RouterModule
    
  ]
})

export class AtomsModule { }
