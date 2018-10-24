import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RsongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rsongs',
  templateUrl: 'rsongs.html',
})
export class RsongsPage {
  SongsR=['1 Don´t Get in My Way (6:48)',
  '2 Slave (4:39)',
  '3 Nice to Meet Me (6:17)',
  '4 So Silent (5:05)',
  '5 Silver Crimson Black (6:48)',
  '6 Greeting the Menance (4:27)',
  '7 I Can Get it Back (7:37)',
  '8 Fade Away (5:56)',
  '9 Teachings of a Ronin (5:12)',
  '10 The Zoo (5:34)'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RsongsPage');
  }

}
