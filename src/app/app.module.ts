import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TsfhPage } from '../pages/tsfh/tsfh';
import { RoninPage } from '../pages/ronin/ronin';
import { LesFrictionPage } from '../pages/les-friction/les-friction';
import { RobotFacePage } from '../pages/robot-face/robot-face';
import { TbioPage } from '../pages/tbio/tbio';
import { RbioPage } from '../pages/rbio/rbio';
import { RFbioPage } from '../pages/r-fbio/r-fbio';
import { LFbioPage } from '../pages/l-fbio/l-fbio';
import { TsongsPage } from '../pages/tsongs/tsongs';
import { RsongsPage } from '../pages/rsongs/rsongs';
import { RFsongsPage } from '../pages/r-fsongs/r-fsongs';
import { LFsongsPage } from '../pages/l-fsongs/l-fsongs';
import { TRevPage } from '../pages/t-rev/t-rev';
import { RRevPage } from '../pages/r-rev/r-rev';
import { RfRevPage } from '../pages/rf-rev/rf-rev';
import { LfRevPage } from '../pages/lf-rev/lf-rev';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TsfhPage,
    RoninPage,
    LesFrictionPage,
    RobotFacePage,
    TbioPage,
    RbioPage,
    RFbioPage,
    LFbioPage,
    TsongsPage,
    RsongsPage,
    RFsongsPage,
    LFsongsPage,
    TRevPage,
    RRevPage,
    RfRevPage,
    LfRevPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TsfhPage,
    RoninPage,
    LesFrictionPage,
    RobotFacePage,
    TbioPage,
    RbioPage,
    RFbioPage,
    LFbioPage,
    TsongsPage,
    RsongsPage,
    RFsongsPage,
    LFsongsPage,
    TRevPage,
    RRevPage,
    RfRevPage,
    LfRevPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
