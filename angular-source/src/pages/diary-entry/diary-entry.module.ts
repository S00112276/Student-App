import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiaryEntryPage } from './diary-entry';

@NgModule({
  declarations: [
    DiaryEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(DiaryEntryPage),
  ],
})
export class DiaryEntryPageModule {}
