import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TsfhPage } from '../tsfh/tsfh';
import { RoninPage } from '../ronin/ronin';
import { LesFrictionPage } from '../les-friction/les-friction';
import { RobotFacePage } from '../robot-face/robot-face';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Timg=TsfhPage;
  Rimg=RoninPage;
  LFimg=LesFrictionPage;
  RFimg=RobotFacePage;

  constructor(public navCtrl: NavController) {

  }

  clickTimg ()
  {
    this.navCtrl.push(this.Timg);
  }

  clickRimg ()
  {
    this.navCtrl.push(this.Rimg);
  }
  clickLFimg ()
  {
    this.navCtrl.push(this.LFimg);
  }
  clickRFimg()
  {
    this.navCtrl.push(this.RFimg);
  }
}
