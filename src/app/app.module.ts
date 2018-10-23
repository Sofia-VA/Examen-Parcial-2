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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TsfhPage,
    RoninPage,
    LesFrictionPage,
    RobotFacePage

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
    RobotFacePage 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
