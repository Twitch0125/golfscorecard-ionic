import { AddScoresPipe } from '../add-scores.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { TeeTypesPipe } from '../tee-types.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, TeeTypesPipe, AddScoresPipe]
})
export class Tab3PageModule {}
