import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RsongsPage } from './rsongs';

@NgModule({
  declarations: [
    RsongsPage,
  ],
  imports: [
    IonicPageModule.forChild(RsongsPage),
  ],
})
export class RsongsPageModule {}
