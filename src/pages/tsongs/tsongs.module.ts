import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TsongsPage } from './tsongs';

@NgModule({
  declarations: [
    TsongsPage,
  ],
  imports: [
    IonicPageModule.forChild(TsongsPage),
  ],
})
export class TsongsPageModule {}
