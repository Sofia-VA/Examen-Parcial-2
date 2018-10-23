import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TbioPage } from './tbio';

@NgModule({
  declarations: [
    TbioPage,
  ],
  imports: [
    IonicPageModule.forChild(TbioPage),
  ],
})
export class TbioPageModule {}
