import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutes } from './authentication.routing';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../components/atoms/atoms.module';
import { LayoutModule } from '../components/layouts/layout.module';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileConfigComponent } from './profile-config/profile-config.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    ProfileListComponent,
    ProfileConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    LayoutModule,
    AtomsModule,
    MoleculesModule,
  ]
})
export class AuthenticationModule { }
