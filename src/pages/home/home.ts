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
import { TsongsPage } from '../tsongs/tsongs';
import { RsongsPage } from '../rsongs/rsongs';
import { RFsongsPage } from '../r-fsongs/r-fsongs';
import { LFsongsPage } from '../l-fsongs/l-fsongs';
import { TRevPage } from '../t-rev/t-rev';
import { RRevPage } from '../r-rev/r-rev';
import { RfRevPage } from '../rf-rev/rf-rev';
import { LfRevPage } from '../lf-rev/lf-rev';

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
  Ts=TsongsPage;
  Rs=RsongsPage;
  RFs=RFsongsPage;
  LFs=LFsongsPage;
  Tr=TRevPage;
  Rr=RRevPage;
  RFr=RfRevPage;
  LFr=LfRevPage;
  
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
  clickTs ()
  {
    this.navCtrl.push(this.Ts);
  }
  clickRs ()
  {
    this.navCtrl.push(this.Rs);
  }
  clickLFs ()
  {
    this.navCtrl.push(this.LFs);
  }
  clickRFs()
  {
    this.navCtrl.push(this.RFs);
  }
  clickTr ()
  {
    this.navCtrl.push(this.Tr);
  }
  clickRr ()
  {
    this.navCtrl.push(this.Rr);
  }
  clickLFr ()
  {
    this.navCtrl.push(this.LFr);
  }
  clickRFr()
  {
    this.navCtrl.push(this.RFr);
  }
}
