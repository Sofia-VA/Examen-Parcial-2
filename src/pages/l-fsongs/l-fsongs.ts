import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LFsongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-l-fsongs',
  templateUrl: 'l-fsongs.html',
})
export class LFsongsPage {
    SongsLF=[ '1 Louder than Words (4:44)',
    '2 Torture (5:03)',
    '3 What You Need (3:31)',  
    '4 Here Comes the Reign (3:48)',
    '5 World on Fire (3:51)', 
    '6 Save your Life (3:09)', 
    '7 Sunday (3:36)',
    '8 String Theory (4:06)',  
    '9 Come Back to Me (3:52)'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LFsongsPage');
  }

}
