import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRouters } from './profile.routing';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../components/atoms/atoms.module';
import { LayoutModule } from '../components/layouts/layout.module';
import { MoleculesModule } from '../components/molecules/molecules.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRouters),
    LayoutModule,
    AtomsModule,
    MoleculesModule,
  ]
})
export class ProfileModule { }
