import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './feeds/feeds.component';
import { RouterModule } from '@angular/router';
import { FeedsRouters } from './feeds.routing';
import { AtomsModule } from '../components/atoms/atoms.module';
import { LayoutModule } from '../components/layouts/layout.module';
import { MoleculesModule } from '../components/molecules/molecules.module';




@NgModule({
  declarations: [
    FeedsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FeedsRouters),
    LayoutModule,
    AtomsModule,
    MoleculesModule,
  ]
})
export class FeedsModule { }
