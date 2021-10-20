// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { ContainerComponent } from './container/container.component';
import { AtomsModule } from '../atoms/atoms.module';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AppLayout } from './app-layout/app-layout.component';

// Third Party modules

import {ProgressSpinnerModule} from 'primeng/progressspinner';


// TODO: Importado para poder usar el outlet
import { RouterModule } from '@angular/router';
import { Authentication } from './authentication/authentication.component';
import { AdminComponent } from './admin/admin.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';




@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SubHeaderComponent,
    NavbarComponent,
    LayoutContainerComponent,
    AppLayout,
    Authentication,
    AdminComponent,
    PreloaderComponent,
    BlankLayoutComponent

  ],
  exports:[
    ContainerComponent, 
    HeaderComponent, 
    SubHeaderComponent,
    NavbarComponent,
    LayoutContainerComponent,
    AppLayout,
    Authentication,
    PreloaderComponent,
    BlankLayoutComponent

  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
  // TODO: Importado para poder usar el outlet
    RouterModule,
    ProgressSpinnerModule
    
  ]
})
export class LayoutModule { }
