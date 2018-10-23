import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RobotFacePage } from './robot-face';

@NgModule({
  declarations: [
    RobotFacePage,
  ],
  imports: [
    IonicPageModule.forChild(RobotFacePage),
  ],
})
export class RobotFacePageModule {}
