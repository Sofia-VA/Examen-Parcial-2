import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RFsongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-r-fsongs',
  templateUrl: 'r-fsongs.html',
})
export class RFsongsPage {
  SongsRF=['1. Lone Digger (3:49)',
    '2. Comics (3:32)',
    '3. Mighty (featuring JFTH) (3:21)',
    '4. Aftermath (3:05)',
    '5. Wonderland (3:10)',
    '6. Tattoos (3:27)',
    '7. Midnight (3:25)',
    '8. Russian (4:01)',
    '9. Wonda (3:44)',
    '10. Human Leather Shoes for Crocodile Dandies (4:33)',
    '11. Lay Down (3:08)'
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RFsongsPage');
  }

}
