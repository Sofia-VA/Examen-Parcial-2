import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TsfhPage } from '../tsfh/tsfh';
import { RoninPage } from '../ronin/ronin';
import { LesFrictionPage } from '../les-friction/les-friction';
import { RobotFacePage } from '../robot-face/robot-face';
import { TbioPage } from '../tbio/tbio';
import { RbioPage } from '../rbio/rbio';
import { LFbioPage } from '../l-fbio/l-fbio';
import { RFbioPage } from '../r-fbio/r-fbio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Timg=TsfhPage;
  Rimg=RoninPage;
  LFimg=LesFrictionPage;
  RFimg=RobotFacePage;
  Tbio=TbioPage;
  Rbio=RbioPage;
  LFbio=LFbioPage;
  RFbio=RFbioPage;

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
  clickTbio ()
  {
    this.navCtrl.push(this.Tbio);
  }

  clickRbio ()
  {
    this.navCtrl.push(this.Rbio);
  }
  clickLFbio ()
  {
    this.navCtrl.push(this.LFbio);
  }
  clickRFbio()
  {
    this.navCtrl.push(this.RFbio);
  }
}
